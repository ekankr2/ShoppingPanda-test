import React, {FC, useEffect, useState} from "react";
import StatusCard from "../../../UI/cards/StatusCard";
import Message from "../../../UI/Message";
import {adminDashboardCard} from "./adminTypes";
import {
    useGetAdminPandaSettlementCompleteList,
    useGetAdminPandaSettlementList
} from "../../../../api/queryHooks/mypageHooks/adminPageHooks";
import AdminPandaTable from "./AdminPandaTable";

const PandaDashboard: FC = () => {
    const [cardItems, setCardItems] = useState(adminDashboardCard)
    const {data: pandaSettlementList, isError: settlementError} = useGetAdminPandaSettlementList()
    const {data: pandaSettlementCompleteList, isError: settlementCompleteError} = useGetAdminPandaSettlementCompleteList()

    console.log('예정목록: ',pandaSettlementList)
    console.log('완료목록: ',pandaSettlementCompleteList)

    useEffect(()=>{
        let cardCopy = [...cardItems]
        if (pandaSettlementList && pandaSettlementCompleteList) {
            cardCopy[0].count = pandaSettlementList.totalElement
            cardCopy[1].count = pandaSettlementCompleteList.totalElement
            setCardItems(cardCopy)
        }
    },[pandaSettlementList, pandaSettlementCompleteList])

    return (
        <>
            <div className="container">
                {settlementError && <Message type="danger" msg="pandaSettlementList 에러"/>}
                {settlementCompleteError && <Message type="danger" msg="settlementComplete 에러"/>}
                <div className="page-header">

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {
                                cardItems.map((item, index) =>
                                    <div className="col-lg-6 col-sm-12" key={index}>
                                        <StatusCard
                                            link={item.link}
                                            icon={item.icon}
                                            count={item.count}
                                            title={item.title}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <AdminPandaTable/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PandaDashboard
