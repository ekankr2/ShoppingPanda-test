import {
    FETCH_PANDA_DASHBOARD,
    FETCH_PANDA_SETTLEMENT,
    FETCH_PANDA_SETTLEMENT_LIST,
    PandaMyPageAction,
    PandaMyPageState
} from "../../types";

const initialState: PandaMyPageState = {
    pandaDashboard: null,
    pandaSettlement: null,
    pandaSettlementList: null
}

export default (state = initialState, action: PandaMyPageAction) => {
    switch (action.type) {
        case FETCH_PANDA_DASHBOARD:
            return {
                ...state,
                pandaDashboard: action.payload
            }
        case FETCH_PANDA_SETTLEMENT_LIST:
            return {
                ...state,
                pandaSettlementList: action.payload
            }
        case FETCH_PANDA_SETTLEMENT:
            return {
                ...state,
                pandaSettlement: action.payload
            }
        default:
            return state
    }
}
