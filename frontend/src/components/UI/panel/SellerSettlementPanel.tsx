import React, {FC, FormEvent, useState} from 'react';
import Panel from "./Panel";
import {settlementSearchByDate, settlementSearchByStatus} from "../../pages/mypage/seller/sellerTypes";
import Button from "../Button";
import {setError, setLoading} from "../../../store/actions/pageActions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";


const SellerSettlementPanel: FC = () => {
    const dispatch = useDispatch();
    const {error} = useSelector((state: RootState) => state.page);

    const [searchMode, setSearchMode] = useState('date')
    const [searchDate, setSearchDate] = useState('')
    const [searchDateMode, setSearchDateMode] = useState('planned')
    const [searchStatus, setSearchStatus] = useState('all')
    const [searchOrderNum, setSearchOrderNum] = useState('')
    console.log(`날짜모드: ${searchDateMode}, 상태모드: ${searchStatus}`)
    console.log('주문번호 : ', searchOrderNum)


    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if (error) {
            dispatch(setError(''));
        }
        setLoading(true);
        console.log('hi')
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setSearchDateMode('planned')
        setSearchOrderNum('')
        setSearchStatus('all')
    }

    return (
        <>
            <Panel title="조회하기" className="is-info">
                <form onSubmit={submitHandler}>
                    <p className="panel-tabs" style={{marginBottom: 0}}>
                        <a onClick={() => {
                            setSearchMode('date')
                            setSearchOrderNum('')
                        }}
                           className={searchMode === 'date' ? 'is-active' : ''}>날짜</a>
                        <a onClick={() => {
                            setSearchMode('orderNum')
                            setSearchDateMode('planned')
                            setSearchStatus('all')
                        }}
                           className={searchMode === 'orderNum' ? 'is-active' : ''}>주문번호</a>
                    </p>
                    {
                        searchMode === 'date' ?
                            <>
                                <div className="panel-block">
                                    <p className="my-auto ml-2 mr-6 has-text-grey">조회기간</p>
                                    <div className="select">
                                        <select value={searchDateMode}
                                                onChange={(e) => setSearchDateMode(e.target.value)}>
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
                            :
                            <div className="panel-block">
                                <p className="my-auto ml-2 mr-6 has-text-grey">번호검색</p>
                                <div className="field mr-2">
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="주문번호 입력"
                                            value={searchOrderNum}
                                            onChange={(e) => setSearchOrderNum(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                    }
                    <div className="panel-block">
                        <div className="mx-auto">
                            <Button type="submit" className="is-info is-outlined mr-2" text="검색하기"/>
                            <Button onClick={clickHandler} className="ml-2" text="초기화"/>
                        </div>
                    </div>
                </form>
            </Panel>
        </>
    );
};

export default SellerSettlementPanel;
