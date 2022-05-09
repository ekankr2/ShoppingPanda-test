import {useQuery} from "react-query";
import axios from '../../axiosDefaults';
import {BuyerDashboard, RecentSituation, Situation} from "../types";

export enum BuyerKeysEnum {
    RecentSituationList = 'recentSituationList',
    RecentSituationDetail = 'recentSituationDetail',
    BuyerDashboard = 'buyerDashboard',
}

export const useGetRecentSituationList = (size: number, page: number) =>
    useQuery(
        [BuyerKeysEnum.RecentSituationList, page], async () => {
            const res = await axios.get<RecentSituation>(`/api/recentsituation?size=${size}&page=${page}`)
            return res.data
        },{
            keepPreviousData: true
        }
    )

export const useGetBuyerDashboard = () =>
    useQuery(
        BuyerKeysEnum.BuyerDashboard, async () => {
            const res = await axios.get<BuyerDashboard>('/api/dashboard')
            return res.data
        }
    )

export const useGetSituationDetail = (detailId: number) =>
    useQuery(
        [BuyerKeysEnum.RecentSituationDetail, detailId], async () => {
            const res = await axios.post<Situation>('/api/situationdetail', {
                    detailId: detailId
                })
            return res.data
        }, {
            enabled: !!detailId
        })
