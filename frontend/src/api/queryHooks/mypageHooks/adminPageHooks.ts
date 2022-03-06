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

export const useGetAdminPandaSettlementList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminPandaSettlementList, async () => {
            const res = await axios.get(`/api/admin/pandaSettleList?size=10&page=${page}`)
            return res.data as AdminPandaSettlementList
        }
)


export const useGetAdminPandaSettlementCompleteList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminPandaSettlementCompleteList, async () => {
            const res = await axios.get(`/api/admin/completepandaSettleList?size=10&page=${page}`)
            return res.data as AdminPandaSettlementList
        }
    )

export const useGetAdminShopSettlementList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminShopSettlementList, async () => {
            const res = await axios.get(`/api/admin/shopSettleList?size=10&page=${page}`)
            return res.data as AdminShopSettlementList
        }
    )


export const useGetAdminShopSettlementCompleteList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminShopSettlementCompleteList, async () => {
            const res = await axios.get(`/api/admin/completeshopSettleList?size=10&page=${page}`)
            return res.data as AdminShopSettlementList
        }
    )
