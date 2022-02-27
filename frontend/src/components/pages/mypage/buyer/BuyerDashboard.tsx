import React, {FC, useEffect, useState, Suspense} from "react";
import {dashboardCard} from "./buyerTypes";
import StatusCard from "../../../UI/cards/StatusCard";
import MyPageTable from "../../../UI/table/MyPageTable";
import Badge from "../../../UI/badge/Badge";
import {latestOrders} from "./buyerTypes";
import Modal from "../../../UI/modal/Modal";
import {Link} from "react-router-dom";
import Message from "../../../UI/Message";
import {
    useGetBuyerDashboard,
    useGetRecentSituation,
    useGetSituationDetail
} from "../../../../api/queryHooks/mypageHooks/buyerMypageHooks";
import LoadingComponent from "../../../UI/LoadingComponent";

const orderStatus: StringObj = {
    "결제완료": "primary",
    "준비중": "primary",
    "완료": "primary",
    "주문취소": "danger",
    "배송중": "success",
    "발송중": "success",
    "반품": "warning"
}

const renderHead = (item: any, index: number) => (
    <th key={index}>{item}</th>
)

const BuyerDashboard: FC = () => {
    const [showModal, setShowModal] = useState(false)
    const [cardItems, setCardItems] = useState(dashboardCard)
    const {data: buyerSituationList, error: situationError} = useGetRecentSituation();
    const {data: buyerDashboard} = useGetBuyerDashboard();
    const [detailId, setDetailId] = useState(0)
    const {data: buyerSituationDetail, isFetching: detailFetching} = useGetSituationDetail(detailId)


    console.log('도그: ', detailFetching)

    useEffect(() => {
        let copy = [...cardItems]
        if (buyerDashboard) {
            copy[0].count = buyerDashboard.readyProduct
            copy[1].count = buyerDashboard.finishProduct
            copy[2].count = buyerDashboard.cancelProduct
            copy[3].count = buyerDashboard.cartProduct
            setCardItems(copy)
        }
    }, [buyerDashboard])

    const handleClick = async (item: string) => {
        await setDetailId(+item)
        setShowModal(true)
    }

    const renderBody = (item: StringObj, index: number) => (
        <tr key={index} onClick={() => {
            handleClick(item.num)
        }}>
            <td>{item.num}</td>
            <td>{item.productName}</td>
            <td>{item.price} ₩</td>
            <td>{(item.orderAt).slice(0, 10)}</td>
            <td>
                <Badge type={orderStatus[item.status]} content={item.status}/>
            </td>
        </tr>
    )


    const renderBodyMobile = (item: StringObj, index: number) => (
        <tr key={index}>
            <td>{item.productName}</td>
            <td>
                <Badge type={orderStatus[item.status]} content={item.status}/>
            </td>
        </tr>
    )

    return (
        <>
            <Suspense fallback={<LoadingComponent/>}>
                <div className="container">
                    <Link to="/">
                        {/*<h3 className="page-header">마이페이지{data?.data.url}</h3>*/}
                    </Link>

                    {situationError && <Message type="danger" msg={'통신 에러'}/>}
                    {/*card*/}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                {
                                    cardItems.map((item, index) =>
                                        <div className="col-lg-3 col-md-6" key={index}>
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
                            <div className="custom-card">
                                <div className="card__header">
                                    <h3>최근 주문 현황</h3>
                                </div>
                                {/*table pc*/}
                                <div className="card__body is-hidden-mobile">
                                    {
                                        buyerSituationList ?
                                            <MyPageTable
                                                limit="5"
                                                headData={latestOrders.header}
                                                renderHead={(item: any, index: number) => renderHead(item, index)}
                                                bodyData={buyerSituationList.pageList}
                                                renderBody={(item: any, index: number) => renderBody(item, index)}
                                            /> : null
                                    }

                                </div>
                                {/*mobile table*/}
                                <div className="card__body is-hidden-tablet">
                                    {
                                        buyerSituationList ?
                                            <MyPageTable
                                                limit="5"
                                                headData={latestOrders.headerMobile}
                                                renderHead={(item: any, index: number) => renderHead(item, index)}
                                                bodyData={buyerSituationList.pageList}
                                                renderBody={(item: any, index: number) => renderBodyMobile(item, index)}
                                            /> : null
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    showModal &&
                    <Modal onClose={() => {
                        setShowModal(false)
                    }} title={"주문 상세보기"}>
                        {
                            buyerSituationDetail ?
                                <>
                                    <>{buyerSituationDetail.detailId}</>
                                </>

                                : detailFetching ? <LoadingComponent type={"spin"}/>
                                    : <></>
                        }

                    </Modal>
                }
            </Suspense>
        </>
    )
}

export default BuyerDashboard
