import React, {FC} from 'react';

interface Props {
    address: string
    allamount?: number
    detailId: null
    price: number
    products: Products[]
    productName: string
    receiver: string
    receiverPhone: string
    shipprice: number
}

interface Products {
    0: {
        imgPath: string,
        options: {optionName: string, optionCount: number, allAmount:number, pandaName: string | null}[]
    }
}

const OrderDetailModal: FC<Props> = ({}) => {
    return (
        <div>

        </div>
    );
};

export default OrderDetailModal;
