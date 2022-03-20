import create from "zustand";
import {AuthStore} from "./types";
import axios from '../api/axiosDefaults';

export const useAuthStore = create<AuthStore>(set => ({
    user: null,
    signIn: async (id: string, pw: string) => {
        try {
            let form = new FormData();
            form.append("email", id);
            form.append("password", pw);

            const {data} = await axios.post('/api/loginv2', form)
            if(data){
                set({user: data})
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
        } catch (err) {
            console.error(err)
            alert('로그아웃 실패')
        }
    },
    reIssue: () => onTokenRefresh()
}))

// 토큰 재발급 함수
export const onTokenRefresh = async () => {
    try {
        console.log('리프래시중임')
        const {data} = await axios.post('/api/reissuev2')
        if (data) {
            useAuthStore.setState({
                user: data
            })
        }
    } catch (err) {
        console.error(err)
        // 실패 처리
    }
}
