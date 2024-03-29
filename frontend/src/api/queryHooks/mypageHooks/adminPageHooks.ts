import {useQuery} from "react-query";
import {
    AdminPandaApplyList,
    AdminPandaSettlementList,
    AdminShopApplyList,
    AdminShopSettlementList
} from "../types";
import axios from '../../axiosDefaults';

export enum AdminKeysEnum {
    AdminPandaSettlementList = 'adminPandaSettlementList',
    AdminPandaSettlementCompleteList = 'adminPandaSettlementCompleteList',
    AdminShopSettlementList = 'adminShopSettlementList',
    AdminShopSettlementCompleteList = 'adminShopSettlementCompleteList',
    AdminApplyShopList = 'adminApplyShopList',
    AdminApplyPandaList = 'adminApplyPandaList'
}

export const useGetAdminPandaSettlementList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminPandaSettlementList, async () => {
            const res = await axios.get<AdminPandaSettlementList>(`/api/admin/pandaSettleList?size=10&page=${page}`)
            return res.data
        }
    )


export const useGetAdminPandaSettlementCompleteList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminPandaSettlementCompleteList, async () => {
            const res = await axios.get<AdminPandaSettlementList>(`/api/admin/completepandaSettleList?size=10&page=${page}`)
            return res.data
        }
    )

export const useGetAdminShopSettlementList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminShopSettlementList, async () => {
            const res = await axios.get<AdminShopSettlementList>(`/api/admin/shopSettleList?size=10&page=${page}`)
            return res.data
        }
    )


export const useGetAdminShopSettlementCompleteList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminShopSettlementCompleteList, async () => {
            const res = await axios.get<AdminShopSettlementList>(`/api/admin/completeshopSettleList?size=10&page=${page}`)
            return res.data
        }
    )

export const useGetAdminApplyShopList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminApplyShopList, async () => {
            const res = await axios.get<AdminShopApplyList>(`/api/admin/applyShopList?size=10&page=${page}`)
            return res.data
        }
    )

export const useGetAdminApplyPandaList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminApplyPandaList, async () => {
            const res = await axios.get<AdminPandaApplyList>(`/api/admin/applyPandaList?size=10&page=${page}`)
            return res.data
        }
    )
