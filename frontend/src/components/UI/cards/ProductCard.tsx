import React, {FC} from 'react';
import {useHistory} from "react-router-dom";
import './productCard.css'

interface Props {
    id?: string
    title: string
    content?: string
    image: string
    price: number | string
    seller?: string
    sellerNum?: string
    status?: string
    date?: string
}

const ProductCard: FC<Props> = ({id, title, content, image, price, seller, sellerNum, status, date, children}) => {
    let history = useHistory()
    const thumbnail = {
        width: "100%",
        maxWidth: "180px",
        height: "180px",
        borderRadius: "10px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "inline-block",
        verticalAlign: "top",
        margin: "auto 0"
    }

    return (
        <div className="product-container">
            <ul className="product row" onClick={() => {
                history.push('/detail/' + id)
            }}>
                <li className='thumbnail col-3' style={thumbnail}></li>
                <li className="product-content col-5">
                    <h5 className="title">{title}</h5>
                    <p className="order-date">{date}</p>
                    <p className="price">{price}원</p>
                    <p className="status">{status}</p>
                </li>
                <li className="product-right col-3">
                    {children}
                </li>
            </ul>
        </div>
    );
};

export default ProductCard;
