import { ThunkAction } from "redux-thunk";
import {AuthAction, SET_USER, SignInData, SignUpData, User} from "../types";
import {RootState} from "../index";
import axios from "axios";
import {setError, setLoading} from "./pageActions";

// Create user
export const signup = (data: SignUpData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {

        } catch (err: any) {
            console.log(err);
            onError();
            dispatch(setError(err.message))
        }
    }
}

// login
export const signin = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            dispatch(setLoading(true))
            const res = await axios.post('/api/authenticate',{
                username: data.account,
                password: data.password
            })
            if (res.data) {
                const userData = res.data as User
                console.log(userData)
                dispatch({
                    type: SET_USER,
                    payload: userData
                })
                dispatch(setLoading(false))
            }
        }catch (err: any) {
            console.log(err)
            onError()
            dispatch(setError("아이디나 비밀번호를 확인해 주십시오"))
            dispatch(setLoading(false))

        }
    }
}

// signout
export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            await axios.get('http://localhost:8080/api/user/logout')
        }catch (err) {
            console.log(err)
            dispatch(setLoading(false))
        }
    }
}

// getuser
// export const getUser = (): ThunkAction<void, RootState, null, AuthAction> => {
//     return async dispatch => {
//         try {
//             const res = await axios.get('/api/auth/check')
//             if(res.data){
//                 console.log(res.data)
//             }
//         }catch (err) {
//             console.log(err)
//             dispatch(setLoading(false))
//         }
//     }
// }


