import {ThunkAction} from "redux-thunk";
import {RootState} from "../../index";
import {BuyerMyPageAction, Dashboard, FETCH_DASHBOARD} from "../../types";
import axios from "axios";
import {setError, setLoading} from "../pageActions";

export const fetchDashBoard = (): ThunkAction<void, RootState, null, BuyerMyPageAction> => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/dashboard')

            if (res.data) {
                const dashBoardData = res.data as Dashboard
                console.log(dashBoardData)
                dispatch({
                    type: FETCH_DASHBOARD,
                    payload: dashBoardData
                })
            }
        }catch (error: any){
            console.log(error)
            dispatch(setError("마이페이지 통신 이상"))
            dispatch(setLoading(false))
        }
    }
}
