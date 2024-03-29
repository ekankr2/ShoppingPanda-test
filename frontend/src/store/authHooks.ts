import create from "zustand";
import {AuthStore, SignInData} from "./types";
import axios from '../api/axiosDefaults';
import {useWindowStore} from "./windowHooks";

export const useAuthStore = create<AuthStore>(set => ({
    user: null,
    signIn: async (signInData: SignInData, onError: () => void) => {
        try {
            useWindowStore.setState({
                loading: true
            })
            let form = new FormData();
            form.append("email", signInData.email);
            form.append("password", signInData.password);

            const {data} = await axios.post('/api/loginv2', form)
            if (data) {
                set({user: data})
                useWindowStore.setState({
                    loading: false
                })
            }
        } catch (err) {
            console.error(err)
            onError()
            useWindowStore.setState({
                error: '아이디 비번 다시 확인바람',
                loading: false
            })
        }
    },
    signOut: async () => {
        try {
            await axios.post('/api/user/logoutv2')
            window.location.href = '/'
            set({user: null})
        } catch (err) {
            console.error(err)
            alert('로그아웃 실패')
        }
    },
    signUp: () => {

    },
    tokenRefresh: async () => {
        try {
            const {data} = await axios.post('api/reissuev2')
            if (data) {
                set({user: data})
            }
        } catch (err: any) {
            console.log(err.data)
        }
    }
}))


