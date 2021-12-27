import React, {FC} from 'react';
import MyPageTable from "../../UI/table/MyPageTable";
import customerList from '../../../assets/JsonData/customers-list.json'
import Button from "../../UI/Button";
import "./cart.css"
import {Link} from "react-router-dom";

const cartTableHead = [
    '',
    '상품명',
    '가격',
    '수량'
]

interface Item {
    [index:string]: string
}

const renderHead = (item:Item, index:number) => <th key={index}>{item}</th>
const renderBody = (item:Item, index:number) => (
    <tr key={index}>
        <td>{++index}</td>
        <td>{item.email}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)

interface Props{

}

const Cart: FC<Props> = ({}) => {
    return (
        <>
            <div className="container">
                <h3 className="page-header">장바구니</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <MyPageTable
                                limit='5'
                                headData={cartTableHead}
                                renderHead={(item:Item, index:number) => renderHead(item,index)}
                                bodyData={customerList}
                                renderBody={(item:Item, index:number) => renderBody(item,index)}
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                                <hr/>
                                <div className="row order_calculator">
                                    <dl className="col-2">
                                        <dt>총 상품 금액</dt>
                                        <dd><span>25000원</span></dd>
                                    </dl>
                                    <dl className="col-1">
                                        <i className='bx bx-plus-circle'></i>
                                    </dl>
                                    <dl className="col-2">
                                        <dt>배송비</dt>
                                        <dd><span>2500원</span></dd>
                                    </dl>
                                    <dl className="col-1">
                                        <i className='bx bx-chevron-right'></i>
                                    </dl>
                                    <dl className="col-4">
                                        <dt>총 주문 금액</dt>
                                        <dd><span>25555원</span></dd>
                                    </dl>
                                </div>
                                <hr/>
                            <Button text="주문하기" className="is-primary cart_buy_btn"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
