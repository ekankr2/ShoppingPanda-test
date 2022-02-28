import React, {FC, useEffect, useState} from "react";
import StatusCard from "../../../UI/cards/StatusCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";
import Message from "../../../UI/Message";
import {sellerDashboardCard} from "./sellerTypes";
import {setError, setLoading} from "../../../../store/actions/pageActions";
import {fetchSellerDashboard} from "../../../../store/actions/mypageActions/sellerActions";
import Button from "../../../UI/Button";
import SellerChart from "../../../UI/chart/SellerChart";
import {useGetSellerDashboard} from "../../../../api/queryHooks/mypageHooks/sellerMypageHooks";


const SellerDashboard: FC = () => {
    const [cardItems, setCardItems] = useState(sellerDashboardCard)
    const [currentYear] = useState(new Date().getFullYear())
    const [selectedYear, setSelectedYear] = useState(currentYear)
    const [chartMoney, setChartMoney] = useState<any[]>([])
    const [chartQuantity, setChartQuantity] = useState<any[]>([])
    const [chartDate, setChartDate] = useState<any[]>([])
    const { data: sellerDashboard, isError: error } = useGetSellerDashboard(selectedYear)

    console.log('년도: ',selectedYear)
    console.log('도그그: ',sellerDashboard)

    useEffect(()=>{
        let cardCopy = [...cardItems]
        if(sellerDashboard){
            cardCopy[0].count = sellerDashboard.newOrder
            cardCopy[1].count = sellerDashboard.readyOrder
            cardCopy[2].count = sellerDashboard.cancelReturn
            cardCopy[3].count = sellerDashboard.completeBuy
            setChartMoney(sellerDashboard.money)
            setChartQuantity(sellerDashboard.quantity)
            setChartDate(sellerDashboard.day)
        }
        setCardItems(cardCopy)
    },[sellerDashboard])

    return (
        <>

            <div className="container">
                {error && <Message type="danger" msg="판매자 대쉬보드 통신에러"/>}
                <div className="page-header">
                    <span className="mr-3">
                        <Button
                            text={currentYear}
                            className={selectedYear === currentYear ? "is-info" : ""}
                            onClick={() => {
                                setSelectedYear(currentYear)
                            }}/>
                    </span>
                    <span className="mr-3">
                        <Button
                            text={currentYear - 1}
                            className={selectedYear === currentYear - 1 ? "is-info" : ""}
                            onClick={() => {
                                setSelectedYear(currentYear - 1)
                            }}/>
                    </span>
                    <span className="mr-3">
                        <Button
                            text={currentYear - 2}
                            className={selectedYear === currentYear - 2 ? "is-info" : ""}
                            onClick={() => {
                                setSelectedYear(currentYear - 2)
                            }}/>
                    </span>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {
                                cardItems.map((item, index) =>
                                    <div className="col-lg-3 col-sm-6" key={index}>
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
                        <div style={{minHeight: "500px"}} className="custom-card">
                            <SellerChart date={chartDate} money={chartMoney} quantity={chartQuantity}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerDashboard
