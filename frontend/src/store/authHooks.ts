import create from "zustand";
import axios from "axios";

export interface User {
    id: string;
    accessToken: string;
}

interface AuthState {
    user: User | null;
    signIn: (id: string, pw: string) => void;
    signOut: () => void;
    reIssue: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
    user: null,
    signIn: async (id: string, pw: string) => {

        let form = new FormData();
        form.append("email", id);
        form.append("password", pw);

        const res = await axios.post('/api/loginv2', form)
        console.log(res.data)
        set({user: res.data})
        axios.defaults.headers.common['accessToken'] = res.data.accessToken
    },
    signOut: async () => {
        await axios.get('/api/user/logoutv2')
        set({user: null})
        delete axios.defaults.headers.common['accessToken'];
    },
    reIssue: async () => {
        const res = await axios.post('/api/reissuev2')
        console.log(res.data)
    }
}))

const onSilentRefresh = async () => {
    const res = await axios.post('/api/reissuev2')

}
