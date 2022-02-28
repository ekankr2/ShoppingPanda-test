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
        BuyerEnum.RecentSituation, async () => {
            const res = await axios.get<RecentSituation>('/api/recentsituation')
            return res.data
        }
    )

export const useGetBuyerDashboard = () =>
    useQuery(
        BuyerEnum.BuyerDashboard, async () => {
            const res = await axios.get<BuyerDashboard>('/api/dashboard')
            return res.data
        }
    )

// export const useGetSituationDetail = (detailId: number) =>
//     useQuery(
//         [BuyerEnum.RecentSituationDetail,detailId],
//         () => axios.post<Situation>('/api/situationdetail', {
//             detailId: detailId
//         }).then((res) => res.data),{
//             enabled: !!detailId
//         }
//     )

export const useGetSituationDetail = (detailId: number) =>
    useQuery(
        [BuyerEnum.RecentSituationDetail, detailId], async () => {
            const res = await axios.post<Situation>('/api/situationdetail', {
                    detailId: detailId
                }
            )
            return res.data
        }, {
            enabled: !!detailId
        })
