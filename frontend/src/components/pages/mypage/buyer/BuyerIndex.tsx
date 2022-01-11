import React, {FC} from 'react'

import './buyerIndex.css'

import { Route } from 'react-router-dom'
import {buyerSidebarItems} from "./buyerTypes";
import MyPageRoutes from "../MyPageRoutes";
import Sidebar from "../../../sections/sidebar/Sidebar";

const BuyerIndex:FC = () => {

    return (
            <Route render={(props) => (
                <div className={`layout theme-mode-light theme-color-cyan`}>
                    <Sidebar sidebarItems={buyerSidebarItems} {...props}/>
                    <div className="layout__content">
                        <div className="layout__content-main">
                            <MyPageRoutes/>
                        </div>
                    </div>
                </div>
            )}/>
    )
}

export default BuyerIndex
