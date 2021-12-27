import React, {FC, useEffect, useState} from 'react';
import Button from "../../UI/Button";
import "./cart.css"
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const CartPage: FC = () => {
    const [cartItems, setCartItems] = useState([])

    useEffect(()=>{
        axios.get('/api/mycart')
            .then((result)=>{
                if(result.data.dtos){
                    setCartItems(result.data.dtos)
                }
            }).catch((error)=> {
                console.log(error)
        })
    },[])

    return (
        <>
            <div className="container">
                <h3 className="page-header">장바구니</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="card">

                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card order-card">
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

export default CartPage;
