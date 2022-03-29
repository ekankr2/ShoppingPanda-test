import {useQuery} from "react-query";
import axios from '../../axiosDefaults';
import {SellerDashboard} from "../types";

export enum SellerKeysEnum {
    SellerDashboard = 'sellerDashboard',
    SellerSettlementList = 'sellerSettlementList',
    SellerOrderList = 'sellerOrderList'
}

export const useGetSellerDashboard = (year: number) =>
    useQuery(
        SellerKeysEnum.SellerDashboard, async () => {
            const res = await axios.post('/api/shopdashboardmainv2', {
                year: year
            })
            return res.data as SellerDashboard
        }, {
            enabled: !!year
        }
    )

export const useGetSellerOrderList = (size: number, page: number) =>
    useQuery(
        [SellerKeysEnum.SellerOrderList, size, page], async () => {
            const {data} = await axios.get(`/api/shop/shoporderlist?type=recent&size=${size}&page=${page}`)
            return data as any
        }
    )
