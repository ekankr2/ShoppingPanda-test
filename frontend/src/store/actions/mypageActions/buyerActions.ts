import {ThunkAction} from "redux-thunk";
import {RootState} from "../../index";
import {
    BuyerMyPageAction,
    Dashboard,
    FETCH_DASHBOARD,
    FETCH_SITUATION,
    FETCH_SITUATION_LIST,
    Situation,
    SituationList
} from "../../types";
import axios from "axios";
import {setError} from "../pageActions";

export const fetchDashBoard = (): ThunkAction<void, RootState, null, BuyerMyPageAction> => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/dashboard')

            if (res.data) {
                const dashBoardData = res.data as Dashboard
                console.log('대쉬보드 박스: ', dashBoardData)
                dispatch({
                    type: FETCH_DASHBOARD,
                    payload: dashBoardData
                })
            }
        } catch (error: any) {
            console.log(error)
            dispatch(setError("마이페이지 통신 이상"))
        }
    }
}

export const fetchSituationList = (): ThunkAction<void, RootState, null, BuyerMyPageAction> => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/recentsituation')

            if (res.data) {
                const list = res.data as SituationList
                console.log('최근주문: ',list)
                dispatch({
                    type: FETCH_SITUATION_LIST,
                    payload: list
                })
            }
        } catch (error: any) {
            console.log(error)
            dispatch(setError("최근 주문 통신 이상"))
        }
    }
}

export const fetchSituationWithPage = (size: number, page: number): ThunkAction<void, RootState, null, BuyerMyPageAction> => {
    return async dispatch => {
        try {
            const res = await axios.get(`/api/recentsituation?size=${size}&page=${page}`)

            if (res.data) {
                const list = res.data as SituationList
                console.log(list)
                dispatch({
                    type: FETCH_SITUATION_LIST,
                    payload: list
                })
            }
        } catch (error: any) {
            console.log(error)
            dispatch(setError("최근 주문 통신 이상"))
        }
    }
}

export const fetchSituationDetail = (detailId: number): ThunkAction<void, RootState, null, BuyerMyPageAction> => {
    return async dispatch => {
        try {
            const res = await axios.post('/api/situationdetail', {
                detailId: detailId
            })

            if (res.data) {
                const detail = res.data as Situation
                console.log('주문디테일: ',detail)
                dispatch({
                    type: FETCH_SITUATION,
                    payload: detail
                })
            }
        } catch (error: any) {
            console.log(error)
            dispatch(setError("주문 상세보기 통신 이상"))
        }
    }
}
