import {AuthAction, AuthState, LOGIN_CHECK, NEED_VERIFICATION, SET_USER, SIGN_OUT} from "../types";

const initialState: AuthState = {
    user: null,
    needVerification: false,
    loggedIn: false
}

const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case SIGN_OUT:
            return {
                ...state,
                user: null,
                loggedIn: false,
            }
        case NEED_VERIFICATION:
            return {
                ...state,
                needVerification: true
            }
        case LOGIN_CHECK:
            return {
                ...state,
                loggedIn: action.payload
            }
        default:
            return state
    }
}

export default authReducer
