import React, {FC, useEffect, useState} from "react";
import {dashboardCard} from "./buyerTypes";
import StatusCard from "../../../UI/cards/StatusCard";
import MyPageTable from "../../../UI/table/MyPageTable";
import Badge from "../../../UI/badge/Badge";
import {latestOrders} from "./buyerTypes";
import Modal from "../../../UI/modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {fetchDashBoard, fetchSituationList} from "../../../../store/actions/mypageActions/buyerActions";
import {RootState} from "../../../../store";
import Message from "../../../UI/Message";
import {setError} from "../../../../store/actions/pageActions";

interface StringObj {
    [index: string]: string
}

const BuyerDashboard: FC = () => {
    const [showModal, setShowModal] = useState(false)
    const [cardItems, setCardItems] = useState(dashboardCard)
    const {dashboard} = useSelector((state: RootState) => state.buyer);
    const {situationList} = useSelector((state: RootState) => state.buyer);
    const {error} = useSelector((state: RootState) => state.page);
    const dispatch = useDispatch()

    useEffect(() => {
        // 대쉬보드 값 패치
        if (error) {
            dispatch(setError(''))
        }
        dispatch(fetchDashBoard())
        dispatch(fetchSituationList())
    }, [])

    useEffect(() => {
        let copy = [...cardItems]
        if (dashboard) {
            copy[0].count = dashboard.readyProduct
            copy[1].count = dashboard.finishProduct
            copy[2].count = dashboard.cancelProduct
            copy[3].count = dashboard.cartProduct
            setCardItems(copy)
        }
    }, [dashboard])

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError(''));
            }
        }
    }, []);

    const orderStatus: StringObj = {
        "결제완료": "primary",
        "완료": "primary",
        "취소중": "warning",
        "배송중": "success",
        "반품": "danger"
    }

    const renderHead = (item: any, index: number) => (
        <th key={index}>{item}</th>
    )

    const renderBody = (item: StringObj, index: number) => (
        <tr key={index} onClick={() => {
            setShowModal(true)
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

            <div className="container">
                <h3 className="page-header">마이페이지</h3>
                {error && <Message type="danger" msg={error}/>}
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
                                <MyPageTable
                                    limit="5"
                                    headData={latestOrders.header}
                                    renderHead={(item: any, index: number) => renderHead(item, index)}
                                    bodyData={situationList?.pageList}
                                    renderBody={(item: any, index: number) => renderBody(item, index)}
                                />
                            </div>
                            {/*mobile table*/}
                            <div className="card__body is-hidden-tablet">
                                <MyPageTable
                                    limit="5"
                                    headData={latestOrders.headerMobile}
                                    renderHead={(item: any, index: number) => renderHead(item, index)}
                                    bodyData={situationList?.pageList}
                                    renderBody={(item: any, index: number) => renderBodyMobile(item, index)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                showModal &&
                <Modal onClose={() => {
                    setShowModal(false)
                }} title={"배송 상세보기"}>
                    <div>this is a modal</div>
                </Modal>
            }

        </>
    )
}

export default BuyerDashboard
