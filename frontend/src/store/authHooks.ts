import create from "zustand";
import {AuthStore, SignInData} from "./types";
import axios from '../api/axiosDefaults';
import {useWindowStore} from "./windowHooks";

export const useAuthStore = create<AuthStore>(set => ({
    user: null,
    signIn: async (signInData: SignInData, onError: () => void) => {
        try {
            let form = new FormData();
            form.append("email", signInData.account);
            form.append("password", signInData.password);

            const {data} = await axios.post('/api/loginv2', form)
            if (data) {
                set({user: data})
            }
        } catch (err) {
            console.error(err)
            onError()
            useWindowStore.setState({
                error: '아이디 비번 다시 확인바람'
            })
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
    signUp: () => {

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
        console.error('토큰 재발급 실패', err)
        // 실패 처리
    }
}

