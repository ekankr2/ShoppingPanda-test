import React, {FC, useEffect, useState} from "react";
import StatusCard from "../../../UI/cards/StatusCard";
import Message from "../../../UI/Message";
import {adminDashboardCard} from "./adminTypes";
import {useGetAdminShopSettlementCompleteList, useGetAdminShopSettlementList
} from "../../../../api/queryHooks/mypageHooks/adminPageHooks";
import AdminShopTable from "./AdminShopTable";

const AdminShopManagementPage: FC = () => {
    const [cardItems, setCardItems] = useState(adminDashboardCard)
    const [selectedMode, setSelectedMode] = useState('정산필요')
    const {data: shopSettlementList, isError: settlementError} = useGetAdminShopSettlementList(0)
    const {data: shopSettlementCompleteList, isError: settlementCompleteError} = useGetAdminShopSettlementCompleteList(0)

    useEffect(()=>{
        let cardCopy = [...cardItems]
        if (shopSettlementList && shopSettlementCompleteList) {
            cardCopy[0].count = shopSettlementList.totalElement
            cardCopy[1].count = shopSettlementCompleteList.totalElement
            setCardItems(cardCopy)
        }
    },[shopSettlementList, shopSettlementCompleteList])

    const clickHandler: any = (e: any) => {
        e.preventDefault()
        setSelectedMode(e.target.id)
    }

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
                                            title={item.title}
                                            onClick={clickHandler}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <AdminShopTable
                            selectedMode={selectedMode}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminShopManagementPage
