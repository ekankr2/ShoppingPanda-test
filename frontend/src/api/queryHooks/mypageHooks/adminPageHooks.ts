import {useQuery} from "react-query";
import axios from "axios";
import {AdminPandaSettlementList} from "../types";

export enum AdminKeysEnum {
    AdminPandaSettlementList = 'adminPandaSettlementList',
    AdminPandaSettlementCompleteList = 'adminPandaSettlementCompleteList',
    AdminShopSettlementList = 'adminShopSettlementList',
    AdminShopSettlementCompleteList = 'adminShopSettlementCompleteList',
    AdminShopApplyList = 'adminShopApplyList',
    AdminPandaApplyList = 'adminPandaApplyList'
}

export const useGetAdminPandaSettlementList = () =>
    useQuery(
        AdminKeysEnum.AdminPandaSettlementList, async () => {
            const res = await axios.get('/api/admin/pandaSettleList')
            return res.data as AdminPandaSettlementList
        }
    )

export const useGetAdminPandaSettlementCompleteList = () =>
    useQuery(
        AdminKeysEnum.AdminPandaSettlementCompleteList, async () => {
            const res = await axios.get('/api/admin/completepandaSettleList')
            return res.data as AdminPandaSettlementList
        }
    )
