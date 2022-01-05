import React, {FC} from 'react';
import {useHistory} from "react-router-dom";
import './productCard.css'
import Button from "../Button";

interface Props {
    id?: string
    title: string
    image: string
    price: number | string
    status?: string
    btnText: string
}

const ProductCard: FC<Props> = ({id, title, image, price, status, btnText}) => {
    let history = useHistory()
    const thumbnail = {
        width: "100%",
        maxWidth: "130px",
        height: "130px",
        borderRadius: "10px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "inline-block",
        margin: "auto 0"
    }

    return (
        <div className="container">
            <ul className="product-card-container row" onClick={() => {
                history.push('/detail/' + id)
            }}>
                <li className='col-3 product-card-thumbnail' style={thumbnail}></li>
                <li className="product-card-content col-6">
                    <h5 className="product-card-title">{title}</h5>
                    <p>옵션명 여기 필요함</p>
                    <p>{price}원</p>
                </li>
                <li className="product-right col-3">
                    <h5>{status}</h5>
                    <p className="product-right-seller">판매자 이름 필요</p>
                    <p className="product-right-sellerNum">판매자 전번</p>
                    <Button className="is-info is-outlined" text={btnText}/>
                </li>
            </ul>
        </div>
    );
};

export default ProductCard;
