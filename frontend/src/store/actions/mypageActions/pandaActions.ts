import {ThunkAction} from "redux-thunk";
import {RootState} from "../../index";
import {
    FETCH_PANDA_SETTLEMENT_LIST,
    PandaMyPageAction,
    PandaSettlementList,
    PandaSettlementRequestData,
} from "../../types";
import axios from "axios";
import {setError} from "../pageActions";

export const fetchPandaDashBoard = (): ThunkAction<void, RootState, null, PandaMyPageAction> => {
    return async dispatch => {

    }
}

export const fetchPandaSettlementList = (data:PandaSettlementRequestData, onError: () => void): ThunkAction<void, RootState, null, PandaMyPageAction> => {
    return async dispatch => {
        try {
            const res = await axios.post('/api/pandadashboard', {
                startYear: new Date(data.startDate).getFullYear(),
                startMonth: new Date(data.startDate).getMonth(),
                startDay: new Date(data.startDate).getDate(),
                endYear: new Date(data.endDate).getFullYear(),
                endMonth: new Date(data.endDate).getMonth(),
                endDay: new Date(data.endDate).getDate(),
                status: data.searchStatus,
            })
            if (res.data) {
                const list = res.data as PandaSettlementList
                console.log('판다 정산 목록: ',list)
                dispatch({
                    type: FETCH_PANDA_SETTLEMENT_LIST,
                    payload: list
                })
            }
        } catch (error: any) {
            console.log(error)
            onError()
            dispatch(setError("판다 정산 목록 이상"))
        }
    }
}

export const fetchPandaSettlement = (): ThunkAction<void, RootState, null, PandaMyPageAction> => {
    return async dispatch => {

    }
}
