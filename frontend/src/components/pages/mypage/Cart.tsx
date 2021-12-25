import React, {FC} from 'react';
import MyPageTable from "../../UI/table/MyPageTable";
import customerList from '../../../assets/JsonData/customers-list.json'

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
                <h2 className="page-header">장바구니</h2>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <MyPageTable
                                limit='10'
                                headData={cartTableHead}
                                renderHead={(item:Item, index:number) => renderHead(item,index)}
                                bodyData={customerList}
                                renderBody={(item:Item, index:number) => renderBody(item,index)}
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        결제창
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
