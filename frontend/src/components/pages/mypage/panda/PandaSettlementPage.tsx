import React from 'react';
import PandaSettlementPanel from "../../../UI/panel/PandaSettlementPanel";
import MyPageTable from "../../../UI/table/MyPageTable";
import Badge from "../../../UI/badge/Badge";
import {pandaSettlementTable} from "./pandaTypes";
import Message from "../../../UI/Message";
import {useGetPandaSettlementList} from "../../../../api/queryHooks/mypageHooks/pandaMypageHooks";

const PandaSettlementPage = () => {
    // const {data: pandaSettlementList, error} = useGetPandaSettlementList()

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
            <td>{item.localDateTime.slice(0, 10)}</td>

            <td>USOD01{item.id} </td>
            <td>{item.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ₩</td>
            <td>
                <Badge type={orderStatus[item.status]} content={item.status}/>
            </td>
        </tr>
    );

    return (
        <>
            {/*<div className="container">*/}
            {/*    {error && <Message type="danger" msg='판다 정산 목록 이상'/>}*/}
            {/*    <PandaSettlementPanel/>*/}

            {/*    <div className="row mt-4">*/}
            {/*        <div className="col-12">*/}
            {/*            <div className="custom-card">*/}
            {/*                <div className="card__header">*/}
            {/*                    {pandaSettlementList && <Message*/}
            {/*                        msg={`예상금액 : ${pandaSettlementList.expectMoney} 원 //*/}
            {/*                        정산된 금액: ${pandaSettlementList.finMoney} 원`}*/}
            {/*                        type="info"/>}*/}
            {/*                </div>*/}
            {/*                <div className="card__body">*/}
            {/*                    {*/}
            {/*                        pandaSettlementList ?*/}
            {/*                            <MyPageTable*/}
            {/*                                limit="5"*/}
            {/*                                headData={pandaSettlementTable.header}*/}
            {/*                                renderHead={(item: any, index: number) => renderHead(item, index)}*/}
            {/*                                bodyData={pandaSettlementList.pandaDashboardDtoList}*/}
            {/*                                renderBody={(item: any, index: number) => renderBody(item, index)}*/}
            {/*                            /> : null*/}
            {/*                    }*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};

export default PandaSettlementPage;
