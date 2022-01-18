import React from 'react';
import MyPageTable from "../../../UI/table/MyPageTable";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";
import Badge from "../../../UI/badge/Badge";
import Message from "../../../UI/Message";
import SellerSettlementPanel from "../../../UI/panel/SellerSettlementPanel";
import {sellerSettlementTable} from "./sellerTypes";

const SellerSettlementPage = () => {
    const {sellerSettlementList} = useSelector((state: RootState) => state.seller)
    const {error} = useSelector((state: RootState) => state.page);

    const orderStatus: StringObj = {
        "지급완료": "primary",
        "지급예정": "success",
        "지급대기": "success",
    }

    const renderHead = (item: any, index: number) => (
        <th key={index}>{item}</th>
    )

    const renderBody = (item: StringObj, index: number) => (
        <tr key={index}>
            <td>USOD01{item.id} </td>
            <td>{item.settlePrice}</td>
            <td>{item.fees}</td>
            <td>{item.salesDate.slice(0, 10)}</td>
            <td>{item.expectDate.slice(0, 10)}</td>
            <td>{item.depositCompleted.slice(0, 10)}</td>
            <td>
                <Badge type={orderStatus[item.paymentStatus]} content={item.paymentStatus}/>
            </td>
        </tr>
    );

    return (
        <>
            <div className="container">
                {error && <Message type="danger" msg={error}/>}
                <SellerSettlementPanel/>

                <div className="row mt-4">
                    <div className="col-12">
                        <div className="custom-card">
                            <div className="card__header">
                                {sellerSettlementList && <Message
                                    msg={`예상금액 : ${sellerSettlementList.expectMoney} 원 //
                                    정산된 금액: ${sellerSettlementList.finMoney} 원`}
                                    type="info"/>}
                            </div>
                            <div className="card__body">
                                {
                                    sellerSettlementList ?
                                        <MyPageTable
                                            limit="5"
                                            headData={sellerSettlementTable.header}
                                            renderHead={(item: any, index: number) => renderHead(item, index)}
                                            bodyData={sellerSettlementList.shopDashboardDtoTypeList}
                                            renderBody={(item: any, index: number) => renderBody(item, index)}
                                        /> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SellerSettlementPage;
