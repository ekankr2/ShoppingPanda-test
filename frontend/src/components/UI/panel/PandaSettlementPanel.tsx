import React, {FC, FormEvent, forwardRef, ReactNode, SetStateAction, useState} from 'react';
import Panel from "./Panel";
import {settlementSearchByDate, settlementSearchByStatus} from "../../pages/mypage/seller/sellerTypes";
import Button from "../Button";
import {setError, setLoading} from "../../../store/actions/pageActions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PandaSettlementPanel: FC = () => {
    const dispatch = useDispatch();
    const {error} = useSelector((state: RootState) => state.page);

    const [startDate, setStartDate] = useState<any>(new Date())
    const [endDate, setEndDate] = useState<any>(new Date())
    const [searchDateMode, setSearchDateMode] = useState('planned')
    const [searchStatus, setSearchStatus] = useState('all')
    const [searchOrderNum, setSearchOrderNum] = useState('')
    console.log(`날짜모드: ${searchDateMode}, 상태모드: ${searchStatus}`)
    console.log('주문번호 : ', searchOrderNum)

    console.log('시작날짜 : ,',startDate, '끝나는 날짜 : ', endDate)


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
            <Panel title="조회하기" className="is-danger">
                <form onSubmit={submitHandler}>
                    <p className="panel-tabs" style={{marginBottom: 0}}>
                        <a className="is-active">날짜로 조회하기</a>
                    </p>
                    {
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

                                    <span className="mx-4">
                                       <DatePicker
                                           selected={startDate}
                                           onChange={(date) => setStartDate(date)}
                                           className="red-border"
                                       />
                                    </span>
                                ~
                                    <span className="mx-4">
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            placeholderText="I have been cleared!"
                                        />
                                    </span>


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
                    }
                    <div className="panel-block">
                        <div className="mx-auto">
                            <Button type="submit" className="is-danger is-outlined mr-2" text="검색하기"/>
                            <Button onClick={clickHandler} className="ml-2" text="초기화"/>
                        </div>
                    </div>
                </form>
            </Panel>
        </>
    );
};

export default PandaSettlementPanel;
