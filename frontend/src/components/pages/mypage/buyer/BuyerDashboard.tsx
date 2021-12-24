import {FC} from "react";
import { Link } from 'react-router-dom'
import statusCards from '../../../../assets/JsonData/status-card-data.json'
import StatusCard from "../../../UI/cards/StatusCard";
import MyPageTable from "../../../UI/table/MyPageTable";
import Badge from "../../../UI/badge/Badge";


const BuyerDashboard: FC = () => {

    const latestOrders = {
        header: [
            "order id",
            "user",
            "total price",
            "date",
            "status"
        ],
        body: [
            {
                id: "#OD1711",
                user: "john doe",
                date: "17 Jun 2021",
                price: "$900",
                status: "shipping"
            },
            {
                id: "#OD1712",
                user: "frank iva",
                date: "1 Jun 2021",
                price: "$400",
                status: "paid"
            },
            {
                id: "#OD1713",
                user: "anthony baker",
                date: "27 Jun 2021",
                price: "$200",
                status: "pending"
            },
            {
                id: "#OD1712",
                user: "frank iva",
                date: "1 Jun 2021",
                price: "$400",
                status: "paid"
            },
            {
                id: "#OD1713",
                user: "anthony baker",
                date: "27 Jun 2021",
                price: "$200",
                status: "refund"
            }
        ]
    }

    type T = {
        [index:string]: string
    }

    const orderStatus: T = {
        "shipping": "primary",
        "pending": "warning",
        "paid": "success",
        "refund": "danger"
    }

    const renderOrderHead = (item:any, index:number) => (
        <th key={index}>{item}</th>
    )

    interface OrderItem {
        [index:string]: string
    }
    const renderOrderBody = (item:OrderItem, index:number) => (
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


    return (
        <>
            <h2 className="page-header">Dashboard</h2>
            <div className="container">
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
                    <div className="col-lg-4 col-sm-12">
                        dummy
                    </div>
                    <div className="col-lg-8 col-sm-12">
                        <div className="card">
                            <div className="card__header">
                                <h3>최근 주문 현황</h3>
                            </div>
                            <div className="card__body">
                                <MyPageTable
                                    headData={latestOrders.header}
                                    renderHead={(item:any, index:number) => renderOrderHead(item, index)}
                                    bodyData={latestOrders.body}
                                    renderBody={(item:any, index:number) => renderOrderBody(item, index)}
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
