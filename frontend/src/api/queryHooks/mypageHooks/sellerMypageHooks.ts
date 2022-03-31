import {useQuery} from "react-query";
import axios from '../../axiosDefaults';
import {SellerDashboard, SellerNewOrder, SellerNewOrderList} from "../types";
import {dateFormatter} from "../../../store/DateFormat";

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
    useQuery<SellerNewOrderList, Error>(
        [SellerKeysEnum.SellerOrderList, size, page], async () => {
            const {data} = await axios.get<SellerNewOrderList>(`/api/shop/shoporderlist?type=recent&size=${size}&page=${page}`)
            const pageList = data.pageList.map((order: SellerNewOrder) => ({...order, orderAt: dateFormatter(order.orderAt)}))
            const returnData = {...data, pageList: pageList}
            return returnData as SellerNewOrderList
        }
    )
