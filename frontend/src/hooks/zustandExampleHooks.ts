import create from "zustand";
import axios from "axios";

export interface Todo {
    id: string;
    description: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    addTodo: (description: string) => void;
    removeTodo: (id: string) => void;
    toggleCompletedState: (id: string) => void;
}

export const useStore = create<TodoState>((set) => ({
    // initial state
    todos: [],
    // methods for manipulating state
    addTodo: (description: string) => {
        set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: 'sampleAccount',
                    description,
                    completed: false,
                } as Todo,
            ],
        }));
    },
    removeTodo: (id) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        }));
    },
    toggleCompletedState: (id) => {
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id
                    ? ({ ...todo, completed: !todo.completed } as Todo)
                    : todo
            ),
        }));
    },
}));

export interface User {
    id: string;
    accessToken: string;
}

interface AuthState {
    user: User | null;
    signIn: (id: string, pw: string) => void;
    signOut: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
    user: null,
    signIn: async (id: string, pw: string) => {

        let form = new FormData();
        form.append("email", id);
        form.append("password", pw);

        const res = await axios.post('/api/loginv2', form)
        console.log(res.data)
        set({ user: res.data})
    },
    signOut: async () => {
        await axios.post('logout')
    }
}))
