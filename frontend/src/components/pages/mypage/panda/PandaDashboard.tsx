import React, {FC, useEffect, useState} from "react";
import StatusCard from "../../../UI/cards/StatusCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";
import Message from "../../../UI/Message";
import {pandaDashboardCard} from "./pandaTypes";
import Button from "../../../UI/Button";
import {setError, setLoading} from "../../../../store/actions/pageActions";
import {fetchPandaDashBoard} from "../../../../store/actions/mypageActions/pandaActions";
import PandaChart from "../../../UI/chart/PandaChart";

const PandaDashboard: FC = () => {
    const {error} = useSelector((state: RootState) => state.page);
    const [cardItems, setCardItems] = useState(pandaDashboardCard)
    const [currentYear] = useState(new Date().getFullYear())
    const [selectedYear, setSelectedYear] = useState(currentYear)
    const [chartSeries, setChartSeries] = useState<number[]>([])
    const {pandaDashboard} = useSelector((state: RootState) => state.panda)
    const dispatch = useDispatch()

    useEffect(() => {
        if (error) {
            dispatch(setError(''))
        }
        dispatch(fetchPandaDashBoard(currentYear, () => setLoading(false)))
    }, [])

    useEffect(()=>{
        dispatch(fetchPandaDashBoard(selectedYear, () => setLoading(false)))
    },[selectedYear, dispatch])

    useEffect(()=>{
        let cardCopy = [...cardItems]
        if (pandaDashboard) {
            cardCopy[0].count = pandaDashboard.expect
            cardCopy[1].count = pandaDashboard.finish
            setCardItems(cardCopy)
            setChartSeries(pandaDashboard.salse)
        }
    },[pandaDashboard, dispatch])

    useEffect(() => {
        return (() => {
            if (error) {
                dispatch(setError(''))
            }
        })
    }, [error, dispatch])

    return (
        <>
            <div className="container">
                {error && <Message type="danger" msg={error}/>}
                <div className="page-header">
                    <span className="mr-3">
                        <Button
                            text={currentYear}
                            className={selectedYear === currentYear ? "is-danger" : ""}
                            onClick={() => {
                                setSelectedYear(currentYear)
                            }}/>
                    </span>
                    <span className="mr-3">
                        <Button
                            text={currentYear - 1}
                            className={selectedYear === currentYear - 1 ? "is-danger" : ""}
                            onClick={() => {
                                setSelectedYear(currentYear - 1)
                            }}/>
                    </span>
                    <span className="mr-3">
                        <Button
                            text={currentYear - 2}
                            className={selectedYear === currentYear - 2 ? "is-danger" : ""}
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
                        <div style={{minHeight: "500px"}} className="custom-card">
                            <PandaChart series={chartSeries}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PandaDashboard
