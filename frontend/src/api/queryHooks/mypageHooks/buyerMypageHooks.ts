import {useQuery} from "react-query";
import axios from "axios";
import {OptionName} from "../../../store/types";

export enum BuyerEnum {
    RecentSituation = 'recentSituation',
    RecentSituationDetail = 'recentSituationDetail',
    BuyerDashboard = 'buyerDashboard'
}

interface Response {
    pageList: {
        num: number
        productName: string
        price: number
        orderAt: any
        status: string
    }[]
    success: boolean
    totalElement: number
    totalpage: number
}

export interface BuyerDashboard {
    readyProduct: number
    finishProduct: number
    cancelProduct: number
    cartProduct: number
}

export interface Situation {
    address: string
    allamount: number
    detailId: number
    orderDetails: []
    price: number
    products: {
        imgPath: string
        options: OptionName[]
    }[]
    productName: string
    receiver: string
    receiverPhone: string
    shipPrice: number
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

export const useGetSituationDetail = (detailId: number) =>
    useQuery(
        [BuyerEnum.RecentSituationDetail,detailId],
        () => axios.post<Situation>('/api/situationdetail', {
            detailId: detailId
        }).then((res) => res.data),{
            enabled: !!detailId
        }
    )
