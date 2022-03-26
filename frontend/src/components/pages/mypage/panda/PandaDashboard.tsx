import React, {FC, useEffect, useState} from "react";
import StatusCard from "../../../UI/cards/StatusCard";
import Message from "../../../UI/Message";
import {pandaDashboardCard} from "./pandaTypes";
import Button from "../../../UI/Button";
import PandaChart from "../../../UI/chart/PandaChart";
import {useGetPandaDashboard} from "../../../../api/queryHooks/mypageHooks/pandaMypageHooks";

const PandaDashboard: FC = () => {
    const [cardItems, setCardItems] = useState(pandaDashboardCard)
    const [currentYear] = useState(new Date().getFullYear())
    const [selectedYear, setSelectedYear] = useState(currentYear)
    const [chartSeries, setChartSeries] = useState<number[]>([])
    const {data: pandaDashboard, error} = useGetPandaDashboard(selectedYear)

    useEffect(() => {
        let cardCopy = [...cardItems]
        if (pandaDashboard) {
            cardCopy[0].count = pandaDashboard.expect
            cardCopy[1].count = pandaDashboard.finish
            setCardItems(cardCopy)
            setChartSeries(pandaDashboard.salse)
        }
    }, [pandaDashboard])

    return (
        <>
            <div className="container">
                {error && <Message type="danger" msg='판다 대쉬보드 이상'/>}
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
