import {QueryClient, useMutation, useQuery} from "react-query";
import axios from "axios";

export enum ResearchKeysEnum {
    ResearchList = 'researchList',
}

const queryClient = new QueryClient()

export const useGetResearchList = (token: string | undefined) => {
    return useQuery(
        ResearchKeysEnum.ResearchList, async () => {
            const res = await getResearchList(token)
            // console.log('public res',res.data.data)
            return res.data as ResearchList[]
        }, {
            select: (datas) => datas.map((data, index) => ({...data, key: index}))
        }
    )
}

export const useSetResearch = () => {
    return useMutation(({token, data}: SetResearchParams) => setResearch(token, data),
        {
            onSuccess: (newPost) => {
                console.log('성공', newPost)
                return queryClient.invalidateQueries(ResearchKeysEnum.ResearchList)
            },
            onError: () => {
                console.log('실패')
            }
        }
    )
}

export const getResearchList: Function = async (token: string) => {
    const res = await axios.get("example/get" + token);
    return res.data
};

export const setResearch: Function = async ({token, data}: SetResearchParams) => {
    return await axios.post("example/post" + token, data);
};

export interface SetResearchParams {
    token: string
    data: {
        journal: string
        researchTitle: string
        researchContent: string
        link: string
        pubDttm: string
        pubDttm2: string
        category: string
        pmid: string
        author: string
    }
}

export interface ResearchList {
    "author": string,
    "category": string,
    "hasLink": boolean,
    "journal": string,
    "link": string,
    "pmid": string,
    "pubDttm": string,
    "pubDttm2": string,
    "regDttm": string,
    "researchContent": string,
    "researchId": number,
    "researchTitle": string,
    "updDttm": string,
    "userSeq": number,
    key: number | string
}