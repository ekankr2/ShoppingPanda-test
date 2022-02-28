import {useQuery} from "react-query";
import axios from "axios";
import {SellerDashboard} from "../types";

export enum SellerKeysEnum {
    SellerDashboard = 'sellerDashboard'
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
