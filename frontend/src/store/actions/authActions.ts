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
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            let form = new FormData();
            form.append("email", data.account);
            form.append("password", data.password);

            const res = await axios.post("/api/login", form);
            console.log("res정보");
            console.log(res.data.data.accessToken);
            console.log(res.data.data.refreshToken);
            console.log(res.data.data.refreshTokenExpirationTime);
            window.localStorage.setItem("accessToken", res.data.data.accessToken);
            window.localStorage.setItem("refreshToken", res.data.data.refreshToken);
            // setCookie("at", res.data.data.accessToken, { path: "/" });
            // setCookie("rt", res.data.data.refreshToken, { path: "/" });
            const auth = await axios.post("/api/userauth");
            if (res.data) {
                const userData = res.data;
                console.log(userData);
                console.log("어스 :", auth.data);
                dispatch({
                    type: SET_USER,
                    payload: userData,
                });
                let userId = data.account.split("@");
                setCookie("loggedIn", "yes", { path: "/" });
                setCookie("userId", userId[0], { path: "/" });
                setCookie("panda", auth.data.panda, { path: "/" });
                setCookie("seller", auth.data.shop, { path: "/" });
                dispatch(setLoading(false));
            }
        } catch (err) {
            console.log("d어스에러");
            console.log(err);
            onError();
            dispatch(setError("아이디나 비밀번호를 확인해 주십시오"));
            dispatch(setLoading(false));
        }
    };
}

// signout
export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            dispatch(setLoading(true))
            await axios.post('/api/user/logoutv2')
            removeCookie('loggedIn')
            removeCookie('userId')
            removeCookie('panda')
            removeCookie('seller')
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


