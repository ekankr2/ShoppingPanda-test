import React, {FC} from 'react'

import '../buyer/buyerIndex.css'

import { Route } from 'react-router-dom'
import {sellerSidebarItems} from "./sellerTypes";
import MyPageRoutes from "../MyPageRoutes";
import Sidebar from "../../../sections/sidebar/Sidebar";

const SellerIndex:FC = () => {

    return (
        <Route render={(props) => (
            <div className={`layout theme-mode-light theme-color-blue`}>
                <Sidebar sidebarItems={sellerSidebarItems} {...props}/>
                <div className="layout__content">
                    <div className="layout__content-main">
                        <MyPageRoutes/>
                    </div>
                </div>
            </div>
        )}/>
    )
}

export default SellerIndex
