import React, {FC, ReactNode, useState} from 'react';
import Panel from "./Panel";
import {settlementSearchByDate, settlementSearchByStatus} from "../../pages/mypage/seller/sellerTypes";

interface Props {
    itemsPerPage: number
}

const SettlementPanel: FC<Props> = ({itemsPerPage}) => {
    const [searchMode, setSearchMode] = useState('date')
    const [searchDate, setSearchDate] = useState('planned')
    const [searchStatus, setSearchStatus] = useState('all')
    console.log(`날짜모드: ${searchDate}, 상태모드: ${searchStatus}`)

    return (
        <>
            <Panel title="조회하기" className="is-danger">
                <form>
                    <p className="panel-tabs" style={{marginBottom: 0}}>
                        <a onClick={() => {
                            setSearchMode('date')
                        }}
                           className={searchMode === 'date' ? 'is-active' : ''}>날짜</a>
                        <a onClick={() => {
                            setSearchMode('orderNum')
                        }}
                           className={searchMode === 'orderNum' ? 'is-active' : ''}>주문번호</a>
                    </p>
                    {
                        searchMode === 'date' ?
                            <>
                                <div className="panel-block">
                                    <p className="my-auto ml-2 mr-6 has-text-grey">조회기간</p>
                                    <div className="select">
                                        <select value={searchDate} onChange={(e) => setSearchDate(e.target.value)}>
                                            {settlementSearchByDate.map((data: { value: string, label: string }, index: number) => (
                                                <option key={index} value={data.value}>{data.label}</option>
                                            ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="panel-block">
                                    <p className="my-auto ml-2 mr-6 has-text-grey">정산상태</p>
                                    <div className="select mr-2">
                                        <select value={searchStatus} onChange={(e) => setSearchStatus(e.target.value)}>
                                            {settlementSearchByStatus.map((data: { value: string, label: string }, index: number) => (
                                                <option key={index} value={data.value}>{data.label}</option>
                                            ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </>
                            : ''
                    }
                </form>
            </Panel>
        </>
    );
};

export default SettlementPanel;
