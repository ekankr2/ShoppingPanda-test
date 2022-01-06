import React, {FC, useEffect, useState} from 'react';
import RecentOrderCard from "../../../UI/cards/RecentOrderCard";
import {setError} from "../../../../store/actions/pageActions";
import {
    fetchDashBoard,
    fetchSituationList,
    fetchSituationWithPage
} from "../../../../store/actions/mypageActions/buyerActions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";
import Button from "../../../UI/Button";
import {SituationList} from "../../../../store/types";
import axios from "axios";

interface pageList {
    num: number
    productName: string
    price: number
    orderAt: any
    status: string
}

const OrderListPage: FC = () => {
    const {error} = useSelector((state: RootState) => state.page);
    const {situationList} = useSelector((state: RootState) => state.buyer);
    const [pagedData, setPagedData] = useState<pageList[] | null | undefined>(null)
    const [currPage, setCurrPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    console.log('페이지데이타: ', pagedData)


    useEffect(() => {
        if (error) {
            dispatch(setError(''))
        }
        dispatch(fetchSituationWithPage(5, 0))
    }, [])

    useEffect(() => {
        if (currPage === 1) {
            setPagedData(situationList?.pageList)
        }

    }, [situationList])

    function orderBtnText(status: string): string {
        switch (status) {
            case '배송완료':
                return '구매 확정'
            case '배송중':
                return '상세 보기'
            case '상품준비중':
                return '상세 보기'
            case '구매확정':
                return '재구매'
            default:
                return '상세 보기'
        }
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        axios.get(`/api/recentsituation?size=${5}&page=${currPage}`)
            .then((result) => {
                console.log(result.data)
                if (pagedData && result) {
                    setPagedData([...pagedData, ...result.data.pageList])
                }
            })
            .catch(() => {
                console.log('더보기 실패')
            })

        console.log('결과: ', pagedData)

        setCurrPage(currPage + 1)
        console.log(currPage)
    }

    return (
        <>
            <h3 className="page-header">주문 현황</h3>
            {pagedData && pagedData.map((item, index) =>
                <RecentOrderCard key={index}
                                 title={item.productName}
                                 price={item.price}
                                 status={item.status}
                                 btnText={orderBtnText(item.status)}
                />
            )}
            <div className="mt-5" style={{textAlign: "center"}}>
                <Button onClick={handleClick}
                        text="더보기"
                        className={loading ? 'is-primary is-rounded is-loading is-medium'
                            : "is-primary is-rounded is-medium"}
                        disabled={loading}/>
            </div>
        </>
    );
};

export default OrderListPage;
