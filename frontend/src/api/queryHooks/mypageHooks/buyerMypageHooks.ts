import {useQuery} from "react-query";
import axios from '../../axiosDefaults';
import {BuyerDashboard, RecentSituation, Situation} from "../types";

export enum BuyerKeysEnum {
    RecentSituation = 'recentSituation',
    RecentSituationDetail = 'recentSituationDetail',
    BuyerDashboard = 'buyerDashboard'
}

export const useGetRecentSituation = () =>
    useQuery(
        BuyerKeysEnum.RecentSituation, async () => {
            const res = await axios.get('/api/recentsituation')
            return res.data as RecentSituation
        }
    )

export const useGetBuyerDashboard = () =>
    useQuery(
        BuyerKeysEnum.BuyerDashboard, async () => {
            const res = await axios.get('/api/dashboard')
            return res.data as BuyerDashboard
        }
    )

export const useGetSituationDetail = (detailId: number) =>
    useQuery(
        [BuyerKeysEnum.RecentSituationDetail, detailId], async () => {
            const res = await axios.post('/api/situationdetail', {
                    detailId: detailId
                })
            return res.data as Situation
        }, {
            enabled: !!detailId
        })
