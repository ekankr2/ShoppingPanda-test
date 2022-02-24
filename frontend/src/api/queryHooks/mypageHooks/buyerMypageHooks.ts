import {useQuery} from "react-query";
import request from "../../index";
import axios from "axios";

export enum BuyerEnum {
    Items = 'items'
}

export const useGetRecentSituation = () =>
    useQuery(
        BuyerEnum.Items,
        () => axios.get('/api/recentsituation'),
    )
