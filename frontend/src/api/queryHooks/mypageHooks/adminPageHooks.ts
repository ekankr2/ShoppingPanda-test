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

export const useGetAdminApplyShopList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminApplyShopList, async () => {
            const res = await axios.get(`/api/admin/applyShopList?size=10&page=${page}`)
            return res.data as AdminShopApplyList
        }
    )

export const useGetAdminApplyPandaList = (page: number) =>
    useQuery(
        AdminKeysEnum.AdminApplyPandaList, async () => {
            const res = await axios.get(`/api/admin/applyPandaList?size=10&page=${page}`)
            return res.data as AdminPandaApplyList
        }
    )
