// zustand types

// authStore
export interface User {
    userName: string;
    panda: boolean
    seller: boolean
}

export interface SignInData {
    email: string
    password: string
}

export interface AuthStore {
    user: User | null;
    signIn: (data: SignInData, onError: () => void) => void;
    signOut: () => void;
    signUp: () => void;
    tokenRefresh: () => void;
}

export interface WindowStore {
    loading: boolean
    error: string
    setLoading: (loading: boolean) => void
    setError: (error: string) => void
}
