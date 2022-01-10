import React, {FC, useEffect, useState} from "react";
import StatusCard from "../../../UI/cards/StatusCard";

import Chart from 'react-apexcharts'
import Modal from "../../../UI/modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {RootState} from "../../../../store";
import Message from "../../../UI/Message";
import {chartOptions, pandaDashboardCard} from "./pandaTypes";


const PandaDashboard: FC = () => {
    const {error, mode} = useSelector((state: RootState) => state.page);
    const [cardItems] = useState(pandaDashboardCard)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()


    return (
        <>

            <div className="container">
                <Link to="/">
                    <h3 className="page-header">판다페이지</h3>
                </Link>

                {error && <Message type="danger" msg={error}/>}

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
                            <Chart
                                options={mode === 'theme-mode-dark' ? {
                                    ...chartOptions.options,
                                    theme: { mode: 'dark'}
                                } : {
                                    ...chartOptions.options,
                                    theme: { mode: 'light'}
                                }}
                                series={chartOptions.series}
                                type='line'
                                height='100%'
                            />
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
                        <>
                        </>
                    }

                </Modal>
            }

        </>
    )
}

export default PandaDashboard
