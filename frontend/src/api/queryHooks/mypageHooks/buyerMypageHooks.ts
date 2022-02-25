import {useQuery} from "react-query";
import axios from "axios";

export enum BuyerEnum {
    RecentSituation = 'recentSituation',
    BuyerDashboard = 'buyerDashboard'
}

interface Response {
    pageList: RecentList[]
}

interface RecentList {
    num: number
    productName: string
    price: number
    orderAt: string
}

export interface BuyerDashboard {
    readyProduct: number
    finishProduct: number
    cancelProduct: number
    cartProduct: number
}

export const useGetRecentSituation = () =>
    useQuery(
        BuyerEnum.RecentSituation,
        () => axios.get<Response>('/api/recentsituation')
            .then((res) => res.data),
    )

export const useGetBuyerDashboard = () =>
    useQuery(
        BuyerEnum.BuyerDashboard,
        () => axios.get<BuyerDashboard>('/api/dashboard')
            .then((res) => res.data)
    )
