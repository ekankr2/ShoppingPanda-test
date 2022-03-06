import React, {FC, useEffect, useState} from "react";
import StatusCard from "../../../UI/cards/StatusCard";
import Message from "../../../UI/Message";
import {adminApplyListCard} from "./adminTypes";
import {
    useGetAdminApplyShopList,
    useGetAdminPandaSettlementCompleteList,
    useGetAdminPandaSettlementList
} from "../../../../api/queryHooks/mypageHooks/adminPageHooks";
import AdminPandaTable from "./AdminPandaTable";
import AdminApplyTable from "./AdminApplyTable";

const AdminApplyManagementPage: FC = () => {
    const [cardItems, setCardItems] = useState(adminApplyListCard)
    const [selectedMode, setSelectedMode] = useState('상점신청')
    const {data: applyShopList, isError: shopError} = useGetAdminApplyShopList(0)
    const {data: applyPandaList, isError: pandaError} = useGetAdminApplyShopList(0)

    console.log('상점신청목록: ',applyShopList)
    console.log('판다신청목록: ',applyPandaList)

    useEffect(()=>{
        let cardCopy = [...cardItems]
        if (applyShopList && applyPandaList) {
            cardCopy[0].count = applyShopList.totalElement
            cardCopy[1].count = applyPandaList.totalElement
            setCardItems(cardCopy)
        }
    },[applyShopList, applyPandaList])

    const clickHandler: any = (e: any) => {
        e.preventDefault()
        setSelectedMode(e.target.id)
    }

    return (
        <>
            <div className="container">
                {shopError && <Message type="danger" msg="샵 신청 에러"/>}
                {pandaError && <Message type="danger" msg="판다 신청 에러"/>}
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
                        <AdminApplyTable
                            selectedMode={selectedMode}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminApplyManagementPage
