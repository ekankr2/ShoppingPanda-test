import create from "zustand";
import {WindowStore} from "./types";

export const useWindowStore = create<WindowStore>(set => ({
    loading: false,
    error: '',
    setLoading: (loading: boolean) => {
        set({loading: loading})
    },
    setError: (error) => {
        set({error: error})
    }
}))

