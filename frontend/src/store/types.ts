// zustand types

// authStore
export interface User {
    userName: string;
    panda: boolean
    seller: boolean
}

export interface SignInData {
    account: string
    password: string
}

export interface AuthStore {
    user: User | null;
    signIn: (data: SignInData, onError: () => void) => void;
    signOut: () => void;
    signUp: () => void;
    reIssue: () => void;
}

export interface WindowStore {
    loading: boolean
    error: string
    setLoading: (loading: boolean) => void
    setError: (error: string) => void
}
