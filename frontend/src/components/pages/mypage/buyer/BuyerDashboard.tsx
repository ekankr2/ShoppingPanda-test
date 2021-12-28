import {FC} from "react";
import { Link } from 'react-router-dom'
import statusCards from '../../../../assets/JsonData/status-card-data.json'
import StatusCard from "../../../UI/cards/StatusCard";
import MyPageTable from "../../../UI/table/MyPageTable";
import Badge from "../../../UI/badge/Badge";


const BuyerDashboard: FC = () => {

    const latestOrders = {
        header: [
            "주문 번호",
            "상품명",
            "가격",
            "주문 일자",
            "상태"
        ],
        headerMobile: [
            "상품명",
            "상태"
        ],
        body: [
            {
                id: "#OD1711",
                user: "john doe",
                date: "17 Jun 2021",
                price: "$900",
                status: "완료"
            },
            {
                id: "#OD1712",
                user: "frank iva",
                date: "1 Jun 2021",
                price: "$400",
                status: "배송중"
            },
            {
                id: "#OD1713",
                user: "anthony baker",
                date: "27 Jun 2021",
                price: "$200",
                status: "취소중"
            },
            {
                id: "#OD1712",
                user: "frank iva",
                date: "1 Jun 2021",
                price: "$400",
                status: "배송중"
            },
            {
                id: "#OD1713",
                user: "anthony baker",
                date: "27 Jun 2021",
                price: "$200",
                status: "반품"
            }
        ]
    }

    type T = {
        [index:string]: string
    }

    const orderStatus: T = {
        "완료": "primary",
        "취소중": "warning",
        "배송중": "success",
        "반품": "danger"
    }

    const renderHead = (item:any, index:number) => (
        <th key={index}>{item}</th>
    )

    interface OrderItem {
        [index:string]: string
    }

    const renderBody = (item:OrderItem, index:number) => (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.user}</td>
            <td>{item.price}</td>
            <td>{item.date}</td>
            <td>
                <Badge type={orderStatus[item.status]} content={item.status}/>
            </td>
        </tr>
    )

    const renderBodyMobile = (item:OrderItem, index:number) => (
        <tr key={index}>
            <td>{item.user}</td>
            <td>
                <Badge type={orderStatus[item.status]} content={item.status}/>
            </td>
        </tr>
    )

    return (
        <>

            <div className="container">
                <h3 className="page-header">마이페이지</h3>
                {/*card*/}
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {
                                statusCards.map((item, index) =>
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
                        <div className="card">
                            <div className="card__header">
                                <h3>최근 주문 현황</h3>
                            </div>
                            {/*table pc*/}
                            <div className="card__body is-hidden-mobile">
                                <MyPageTable
                                    headData={latestOrders.header}
                                    renderHead={(item:any, index:number) => renderHead(item, index)}
                                    bodyData={latestOrders.body}
                                    renderBody={(item:any, index:number) => renderBody(item, index)}
                                />
                            </div>
                            {/*mobile table*/}
                            <div className="card__body is-hidden-tablet">
                                <MyPageTable
                                    headData={latestOrders.headerMobile}
                                    renderHead={(item:any, index:number) => renderHead(item, index)}
                                    bodyData={latestOrders.body}
                                    renderBody={(item:any, index:number) => renderBodyMobile(item, index)}
                                />
                            </div>
                            <div className="card__footer">
                                <Link to='/'>view all</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default BuyerDashboard
