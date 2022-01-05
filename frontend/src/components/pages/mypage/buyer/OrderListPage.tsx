import React, {FC, useEffect, useState} from 'react';
import item_list from '../../../../assets/JsonData/item_list.json'
import ProductCard from "../../../UI/cards/ProductCard";
import Button from "../../../UI/Button";
import {setError} from "../../../../store/actions/pageActions";
import {fetchDashBoard, fetchSituationList} from "../../../../store/actions/mypageActions/buyerActions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";

const OrderListPage: FC = () => {
    const {error} = useSelector((state: RootState) => state.page);
    const {situationList} = useSelector((state: RootState) => state.buyer);
    const dispatch = useDispatch()


    useEffect(() => {
        if (error) {
            dispatch(setError(''))
        }
        dispatch(fetchDashBoard())
        dispatch(fetchSituationList())
    }, [])

    function orderBtnText(status:string) :string {
        switch (status) {
            case '배송완료':
                return '구매 확정'
            case '배송중':
                return '배송 정보'
            case '상품준비중':
                return '취소요청'
            case '구매확정':
                return '재구매'
            default:
                return '배송 정보'
        }
    }

    return (
        <>
            <h3 className="page-header">주문 현황</h3>
            {situationList && situationList.pageList.map((item, index) =>
                <ProductCard key={index}
                             title={item.productName}
                             image="https://semantic-ui.com/images/wireframe/image.png"
                             price={item.price}
                             status={item.status}
                             btnText={orderBtnText(item.status)}
                />
            )}
        </>
    );
};

export default OrderListPage;
