import {ThunkAction} from "redux-thunk";
import {AuthAction, LOGIN_CHECK, SET_USER, SIGN_OUT, SignInData, SignUpData, User} from "../types";
import {RootState} from "../index";
import axios from "axios";
import {setError, setLoading} from "./pageActions";
import {getCookie, removeCookie, setCookie} from "./Cookie";

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
            const res = await axios.post('/api/authenticate', {
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
                let userId = data.account.split('@')
                setCookie('loggedIn', 'yes', {path: '/'})
                setCookie('userId', userId[0], {path: '/'})
                dispatch(setLoading(false))
            }
        } catch (err: any) {
            console.error(err)
            onError()
            dispatch(setLoading(false))
            dispatch(setError("아이디나 비밀번호를 확인해 주십시오"))
        }
    }
}

// signout
export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            dispatch(setLoading(true))
            await axios.get('http://localhost:8080/api/user/logout')
            removeCookie('loggedIn')
            removeCookie('userId')
            dispatch({
                type: SIGN_OUT
            })
        } catch (err) {
            console.log(err)
            dispatch(setLoading(false))
        }
        dispatch(setLoading(false))
    }
}

// checkUserwithCookies
export const loginCheck = (): AuthAction => {
    const loggedIn = getCookie('loggedIn')
    if (loggedIn === 'yes') {
        return {
            type: LOGIN_CHECK,
            payload: true
        }
    }
    return {
        type: LOGIN_CHECK,
        payload: false
    }
}


