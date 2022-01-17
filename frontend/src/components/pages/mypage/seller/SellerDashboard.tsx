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


const SellerDashboard: FC = () => {
    const [cardItems, setCardItems] = useState(sellerDashboardCard)
    const [currentYear] = useState(new Date().getFullYear())
    const [selectedYear, setSelectedYear] = useState(currentYear)
    const dispatch = useDispatch()
    const [chartMoney, setChartMoney] = useState<any[]>([])
    const [chartQuantity, setChartQuantity] = useState<any[]>([])
    const {error} = useSelector((state: RootState) => state.page);
    const { sellerDashboard } = useSelector((state: any) => state.seller)

    useEffect(() => {
        if (error) {
            dispatch(setError(''))
        }
        dispatch(fetchSellerDashboard(currentYear, () => setLoading(false)))
    }, [])

    useEffect(() => {
        dispatch(fetchSellerDashboard(selectedYear, () => setLoading(false)))
    }, [selectedYear, dispatch])

    useEffect(()=>{
        let cardCopy = [...cardItems]
        if(sellerDashboard){
            cardCopy[0].count = sellerDashboard.newOrder
            cardCopy[1].count = sellerDashboard.readyOrder
            cardCopy[2].count = sellerDashboard.cancelReturn
            cardCopy[3].count = sellerDashboard.completeBuy
            setChartMoney(sellerDashboard.money)
            setChartQuantity(sellerDashboard.quantity)
        }
        setCardItems(cardCopy)
    },[sellerDashboard, dispatch])

    useEffect(()=>{
        return (()=>{
            if(error) {
                dispatch(setError(''))
            }
        })
    },[error, dispatch])

    return (
        <>

            <div className="container">
                {error && <Message type="danger" msg={error}/>}
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
                            <SellerChart money={chartMoney} quantity={chartQuantity}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerDashboard
