import React, {FC} from 'react'

import './buyerMyPage.css'

import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from "../../../sections/Sidebar";
import {buyerSidebarItems} from "./buyerTypes";
import MyPageRoutes from "../MyPageRoutes";

const BuyerMyPage:FC = () => {

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout theme-mode-light theme-color-blue`}>
                    <Sidebar sidebarItems={buyerSidebarItems} {...props}/>
                    <div className="layout__content">
                        <div className="layout__content-main">
                            <MyPageRoutes/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default BuyerMyPage
