import {FETCH_SELLER_DASHBOARD, FETCH_SELLER_SETTLEMENT_LIST, SellerMyPageAction, SellerMyPageState} from "../../types";

const initialState: SellerMyPageState = {
    sellerDashboard: null,
    sellerProductList: null,
    sellerSettlementList: null,
}

export default (state = initialState, action: SellerMyPageAction) => {
    switch (action.type) {
        case FETCH_SELLER_DASHBOARD:
            return {
                ...state,
                sellerDashboard: action.payload
            }
        case FETCH_SELLER_SETTLEMENT_LIST:
            return {
                ...state,
                sellerSettlementList: action.payload
            }
        default:
            return state
    }
}
