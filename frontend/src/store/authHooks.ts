import create from "zustand";
import axios from "axios";
import {AuthStore, User} from "./types";

const TOKEN_EXPIRE_TIME = 1000 * 60 * 30 - 60000 // 30분 - 1분

export const useAuthStore = create<AuthStore>(set => ({
    user: null,
    signIn: async (id: string, pw: string) => {
        try {
            let form = new FormData();
            form.append("email", id);
            form.append("password", pw);

            const res = await axios.post('/api/loginv2', form)
            set({user: res.data})
            await onLoginSuccess(res.data)
        } catch (err) {
            console.error(err)
            // 로그인 실패 처리
        }
    },
    signOut: async () => {
        await axios.get('/api/user/logoutv2')
        set({user: null})
        delete axios.defaults.headers.common['accessToken'];
    }
}))

const onRefresh = async () => {
    try {
        const res = await axios.post('/api/reissuev2')
        if(res.data){
            await onLoginSuccess(res.data)
        }
    } catch (err){
        console.error(err)
        // 로그인 실패 처리
    }
}

const onLoginSuccess = async (data:User) => {
    axios.defaults.headers.common['accessToken'] = data.accessToken
    setTimeout(onRefresh, TOKEN_EXPIRE_TIME)
}