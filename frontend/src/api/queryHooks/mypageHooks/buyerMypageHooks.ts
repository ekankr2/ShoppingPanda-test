import {useQuery} from "react-query";
import request from "../../index";
import axios from "axios";

export enum BuyerEnum {
    Items = 'items'
}

interface Response {
    pageList: RecentList[]
}

interface RecentList {
    num: number
    productName: string
    price: number
    orderAt: string
}

export const useGetRecentSituation = () =>
    useQuery(
        BuyerEnum.Items,
        () => axios.get<Response>('/api/recentsituation')
            .then((res) => res.data),
    )
