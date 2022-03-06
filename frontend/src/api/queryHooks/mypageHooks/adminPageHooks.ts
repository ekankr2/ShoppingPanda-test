import {useQuery} from "react-query";
import axios from "axios";
import {AdminPandaSettlementList, AdminShopSettlementList} from "../types";

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

export const useGetAdminShopSettlementList = () =>
    useQuery(
        AdminKeysEnum.AdminShopSettlementList, async () => {
            const res = await axios.get('/api/admin/shopSettleList')
            return res.data as AdminShopSettlementList
        }
    )


export const useGetAdminShopSettlementCompleteList = () =>
    useQuery(
        AdminKeysEnum.AdminShopSettlementCompleteList, async () => {
            const res = await axios.get('/api/admin/completeshopSettleList')
            return res.data as AdminShopSettlementList
        }
    )
