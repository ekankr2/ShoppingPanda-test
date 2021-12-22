import { ThunkAction } from "redux-thunk";
import {AuthAction, SET_USER, SignInData, SignUpData, User} from "../types";
import {RootState} from "../index";
import axios from "axios";
import {setError} from "./pageActions";

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

export const signin = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/authenticate')
            if (res.data) {
                const userData = res.data as User
                dispatch({
                    type: SET_USER,
                    payload: userData
                })
            }
        }catch (err: any) {
            console.log(err)
            onError()
            dispatch(setError(err))
        }
    }
}
