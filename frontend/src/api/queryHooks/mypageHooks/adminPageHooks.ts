import {useQuery} from "react-query";
import axios from "axios";

export enum AdminKeysEnum {
    PandaSettlementList = 'pandaSettlementList',
    PandaSettlementCompleteList = 'pandaSettlementCompleteList',
    ShopSettlementList = 'shopSettlementList',
    ShopSettlementCompleteList = 'shopSettlementCompleteList',
    ShopApplyList = 'shopApplyList',
    pandaApplyList = 'pandaApplyList'
}

export const useGetPandaSettlementList = () =>
    useQuery(
        AdminKeysEnum.PandaSettlementList, async () => {
            const res = await axios.get('/api/admin/pandaSettleList')
            return res.data as any
        }
    )

export const useGetPandaSettlementCompleteList = () =>
    useQuery(
        AdminKeysEnum.PandaSettlementCompleteList, async () => {
            const res = await axios.get('/api/admin/completepandaSettleList')
            return res.data as any
        }
    )
