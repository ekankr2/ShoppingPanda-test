import React from 'react';
import PandaSettlementPanel from "../../../UI/panel/PandaSettlementPanel";
import MyPageTable from "../../../UI/table/MyPageTable";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";
import Badge from "../../../UI/badge/Badge";
import {pandaSettlementTable} from "./pandaTypes";
import Message from "../../../UI/Message";

const PandaSettlementPage = () => {
    const {pandaSettlementList} = useSelector((state: RootState) => state.panda)
    const { error } = useSelector((state: RootState) => state.page);

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
            <td>{(item.orderAt).slice(0, 10)}</td>
            <td> </td>
            <td>{item.price} ₩</td>
            <td>
                <Badge type={orderStatus[item.status]} content={item.status}/>
            </td>
        </tr>
    )

    return (
        <>
            <div className="container">
                {error && <Message type="danger" msg={error} />}
                <PandaSettlementPanel/>

                <div className="row mt-4">
                    <div className="col-12">
                        <div className="custom-card">
                            <div className="card__body">
                                {
                                    pandaSettlementList ?
                                        <MyPageTable
                                            limit="5"
                                            headData={pandaSettlementTable.header}
                                            renderHead={(item: any, index: number) => renderHead(item, index)}
                                            bodyData={pandaSettlementList.pandaDashboardDtoList}
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

export default PandaSettlementPage;
