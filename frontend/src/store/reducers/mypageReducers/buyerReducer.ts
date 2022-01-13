import {BuyerMyPageAction, BuyerMyPageState, FETCH_BUYER_DASHBOARD, FETCH_BUYER_SITUATION, FETCH_BUYER_SITUATION_LIST} from "../../types";

const initialState: BuyerMyPageState = {
    buyerDashboard: null,
    buyerSituationList: null,
    buyerSituationDetail: null
}

export default (state = initialState, action: BuyerMyPageAction) => {
    switch (action.type) {
        case FETCH_BUYER_DASHBOARD:
            return {
                ...state,
                buyerDashboard: action.payload
            }
        case FETCH_BUYER_SITUATION_LIST:
            return {
                ...state,
                buyerSituationList: action.payload
            }
        case FETCH_BUYER_SITUATION:
            return {
                ...state,
                buyerSituationDetail: action.payload
            }
        default:
            return state
    }
}
