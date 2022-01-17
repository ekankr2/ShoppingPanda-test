import {
    FETCH_PANDA_DASHBOARD,
    FETCH_PANDA_SETTLEMENT,
    FETCH_PANDA_SETTLEMENT_LIST, FETCH_PANDA_VIDEO_LIST,
    PandaMyPageAction,
    PandaMyPageState
} from "../../types";

const initialState: PandaMyPageState = {
    pandaDashboard: null,
    pandaSettlement: null,
    pandaSettlementList: null,
    pandaVideoList: null
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
        case FETCH_PANDA_VIDEO_LIST:
            return {
                ...state,
                pandaVideoList: action.payload
            }
        default:
            return state
    }
}
