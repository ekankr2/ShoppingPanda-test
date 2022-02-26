import {useQuery} from "react-query";
import axios from "axios";
import {BuyerDashboard, RecentSituation, Situation} from "../types";

export enum BuyerEnum {
    RecentSituation = 'recentSituation',
    RecentSituationDetail = 'recentSituationDetail',
    BuyerDashboard = 'buyerDashboard'
}

export const useGetRecentSituation = () =>
    useQuery(
        BuyerEnum.RecentSituation,
        () => axios.get<RecentSituation>('/api/recentsituation')
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
