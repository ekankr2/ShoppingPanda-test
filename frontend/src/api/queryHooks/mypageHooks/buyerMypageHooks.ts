import {useQuery} from "react-query";
import request from "../../index";

export enum BuyerEnum {
    Items = 'items'
}

export const useGetRecentSituation = () =>
    useQuery(
        BuyerEnum.Items,
        () => request('/api/recentsituation'),
    )
