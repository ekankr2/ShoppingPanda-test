import {ThunkAction} from "redux-thunk";
import {RootState} from "../../index";
import {BuyerAction, Dashboard, FETCH_DASHBOARD} from "../../types";
import axios from "axios";
import {setLoading} from "../pageActions";

export const fetchDashBoard = (onError: () => void): ThunkAction<void, RootState, null, BuyerAction> => {
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
            onError()
            dispatch(setLoading(false))
        }
    }
}
