import {BuyerMyPageAction, BuyerMyPageState, FETCH_DASHBOARD, FETCH_SITUATION, FETCH_SITUATION_LIST} from "../../types";

const initialState: BuyerMyPageState = {
    dashboard: null,
    situationList: null,
    situationDetail: null
}

export default (state = initialState, action: BuyerMyPageAction) => {
    switch (action.type) {
        case FETCH_DASHBOARD:
            return {
                ...state,
                dashboard: action.payload
            }
        case FETCH_SITUATION_LIST:
            return {
                ...state,
                situationList: action.payload
            }
        case FETCH_SITUATION:
            return {
                ...state,
                situationDetail: action.payload
            }
        default:
            return state
    }
}
