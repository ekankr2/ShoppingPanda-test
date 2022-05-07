import {useQuery} from "react-query";
import axios from '../../axiosDefaults'
import {PandaDashboard, PandaSettlementList, PandaSettlementRequestData, PandaVideoList} from "../types";

export enum PandaMypageKeysEnum {
    PandaDashboard = 'pandaDashboard',
    PandaSettlementList = 'pandaSettlementList',
    PandaVideoList = 'pandaVideoList',
}

export const useGetPandaDashboard = (year: number) =>
    useQuery(
        [PandaMypageKeysEnum.PandaDashboard, year], async () => {
            const {data} = await axios.post<PandaDashboard>('/api/pandadashboardmain', {
                year: year
            })
            return data
        }
    )

export const useGetPandaSettlementList = (requestData: PandaSettlementRequestData) =>
    useQuery(
        PandaMypageKeysEnum.PandaDashboard, async () => {
            const {data} = await axios.post('/api/pandadashboard', {
                startYear: new Date(requestData.startDate).getFullYear(),
                startMonth: new Date(requestData.startDate).getMonth(),
                startDay: new Date(requestData.startDate).getDate(),
                endYear: new Date(requestData.endDate).getFullYear(),
                endMonth: new Date(requestData.endDate).getMonth(),
                endDay: new Date(requestData.endDate).getDate(),
                status: requestData.searchStatus,
            })
            return data as PandaSettlementList
        }
    )

export const useGetPandaVideoList = () =>
    useQuery(
        PandaMypageKeysEnum.PandaVideoList, async () => {
            const {data} = await axios.get<PandaVideoList>('/api/pandadashboardmovie')
            return data
        }
    )
