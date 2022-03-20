import create from "zustand";
import {AuthStore, User} from "./types";
import axios from '../api/axiosDefaults';

const TOKEN_REFRESH_TIME = 1000 * 60 * 30 - 60000 // 30분 - 1분

export const useAuthStore = create<AuthStore>(set => ({
    user: null,
    signIn: async (id: string, pw: string) => {
        try {
            let form = new FormData();
            form.append("email", id);
            form.append("password", pw);

            const {data} = await axios.post('/api/loginv2', form)
            const res = await axios.post('/api/loginv2', form)
            console.log('레스:', res)
            if(data){
                set({user: data})
                await onLoginSuccess(data)
            }
        } catch (err) {
            console.error(err)
            // 로그인 실패 처리
        }
    },
    signOut: async () => {
        try {
            await axios.post('/api/user/logoutv2')
            set({user: null})
            delete axios.defaults.headers.common['accessToken'];
        } catch (err) {
            console.error(err)
            alert('로그아웃 실패')
        }
    },
    reIssue: async () => {
        try {
            const {data} = await axios.post('/api/reissuev2')
            set({user: data})
        } catch (err){
            console.error(err)
        }
    }
}))

// 토큰 재발급 함수
export const onTokenRefresh = async () => {
    try {
        const {data} = await axios.post('/api/reissuev2')
        if (data) {
            await onLoginSuccess(data)
            useAuthStore.setState({
                user: data
            })
        }
    } catch (err) {
        console.error(err)
        // 로그인 실패 처리
    }
}

// 로그인 성공시 실행
export const onLoginSuccess = async (data: User) => {
    axios.defaults.headers.common['accessToken'] = data.accessToken
    setTimeout(onTokenRefresh, TOKEN_REFRESH_TIME)
}
