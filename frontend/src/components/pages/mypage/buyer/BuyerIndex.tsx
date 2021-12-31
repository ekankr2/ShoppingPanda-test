import React, {FC} from 'react'

import './buyerIndex.css'

import { BrowserRouter, Route } from 'react-router-dom'
import {buyerSidebarItems} from "./buyerTypes";
import MyPageRoutes from "../MyPageRoutes";
import BuyerSidebar from "../../../sections/sidebar/BuyerSidebar";

const BuyerIndex:FC = () => {

    return (
            <Route render={(props) => (
                <div className={`layout theme-mode-light theme-color-blue`}>
                    <BuyerSidebar sidebarItems={buyerSidebarItems} {...props}/>
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
