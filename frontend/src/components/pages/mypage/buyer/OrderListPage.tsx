import React, {FC, useState} from 'react';
import item_list from '../../../../assets/JsonData/item_list.json'
import ProductCard from "../../../UI/cards/ProductCard";
import Button from "../../../UI/Button";

const OrderListPage: FC = () => {
    const [items, setItems] = useState(item_list)

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
            {items && items.map((product, index) =>
                <ProductCard key={index}
                             title={product.title}
                             image={product.image}
                             price={product.price}
                             seller={product.seller}
                             sellerNum={product.sellerNum}
                             status={product.status}
                             date={product.date}
                >
                    <p className="seller-name is-hidden-mobile">{product.seller}</p>
                    <p className="seller-num is-hidden-mobile">{product.sellerNum}</p>
                    <Button text={orderBtnText(product.status)}
                    />
                </ProductCard>)}
        </>
    );
};

export default OrderListPage;