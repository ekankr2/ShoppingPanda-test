import React, {FC, useState} from 'react';
import item_list from '../../../../assets/JsonData/item_list.json'
import ProductCard from "../../../UI/cards/ProductCard";
import Button from "../../../UI/Button";

const CancelListPage: FC = () => {
    const [items, setItems] = useState(item_list)

    function orderBtnText(status: string): string {
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
            <h3 className="page-header">주문 취소 현황</h3>
            {items && items.map((product, index) =>
                <ProductCard key={index}
                             title={product.title}
                             image={product.image}
                             price={product.price}
                             status={product.status}
                             btnText={orderBtnText(product.status)}
                />)}
        </>
    );
};

export default CancelListPage;
