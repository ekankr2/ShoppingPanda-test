import React, {FC, ReactNode, useState} from 'react';
import Panel from "./Panel";

interface Props {
    itemsPerPage: number
}

const SettlementPanel: FC<Props> = ({itemsPerPage}) => {
    const [searchBy, setSearchBy] = useState('date')

    return (
        <>
            <Panel title="조회하기" className="is-danger">

                <p className="panel-tabs">
                    <a onClick={()=>{setSearchBy('date')}}
                       className={searchBy === 'date'? 'is-active' : ''}>날짜</a>
                    <a onClick={()=>{setSearchBy('orderNum')}}
                       className={searchBy === 'orderNum'? 'is-active' : ''}>주문번호</a>
                </p>
                <div className="panel-block">
                    {menuUI[searchBy]}
                </div>
            </Panel>
        </>
    );
};

interface menu{
    [key:string]: ReactNode
}

const menuUI:menu = {
    date: <></>,
    orderNum: <p>주문번호로조회</p>
}

export default SettlementPanel;
