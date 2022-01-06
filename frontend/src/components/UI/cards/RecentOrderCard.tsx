import React, {FC} from 'react';
import './recentOrderCard.css'
import Button from "../Button";
import Badge from "../badge/Badge";
import {StringObj} from "../../sections/sidebar/BuyerSidebar";

interface Props {
    id?: string
    title: string
    price: number | string
    status: string
    btnText: string
}

const RecentOrderCard: FC<Props> = ({id, title, price, status, btnText}) => {

    const orderStatus: StringObj = {
        "결제완료": "primary",
        "준비중": "success",
        "완료": "primary",
        "주문취소": "danger",
        "배송중": "success",
        "반품": "warning"
    }

    return (
        <div className="container">
            <div className="card order-container mb-3">
                <ul className="recent-order-card-container row">
                    <li className="recent-order-card-content col-lg-8 col-sm-12">
                        <h5>{title}</h5>
                        <span className="recent-order-price">{price}원</span>
                        <span className="recent-order-date">2020.12.25</span>
                        <p>상품이 준비중입니다. 조금만 기다려 주세요!</p>
                    </li>
                    <li className="recent-order-right col-lg-4 col-sm-12">
                        <ul className="recent-order-right-status"><Badge type={orderStatus[status]} content={status}/></ul>
                        <ul className="recent-order-right-seller">스파클Mart</ul>
                        <ul className="recent-order-right-sellerNum">010-2345-6758</ul>
                        <ul><Button className="is-info is-outlined" text={btnText}/></ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RecentOrderCard;
