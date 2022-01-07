import {PageAction, PageState, SET_ERROR, SET_LOADING, SET_MODE, SET_SUBMITTED, SET_SUCCESS} from "../types";

const initialState: PageState = {
    loading: false,
    error: '',
    success: '',
    submitted: false,
    mode: ''
}

export default (state = initialState, action: PageAction) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_SUCCESS:
            return {
                ...state,
                success: action.payload
            }
        case SET_SUBMITTED:
            return {
                ...state,
                submitted: action.payload
            }
        case SET_MODE:
            return {
                ...state,
                mode: action.payload
            }
        default:
            return state
    }
}
