import React, {FC, useState} from 'react'

import '../buyer/buyerIndex.css'

import {Redirect, Route} from 'react-router-dom'
import {sellerSidebarItems} from "./sellerTypes";
import MyPageRoutes from "../MyPageRoutes";
import Sidebar from "../../../sections/sidebar/Sidebar";
import {getCookie} from "../../../../store/actions/Cookie";

const SellerIndex:FC = () => {
    const [seller] = useState(getCookie('seller'))

    return (
        <Route render={(props) => (
            seller === 'true' ?
            <div className={`layout theme-mode-light theme-color-blue`}>
                <Sidebar sidebarItems={sellerSidebarItems} {...props}/>
                <div className="layout__content">
                    <div className="layout__content-main">
                        <MyPageRoutes/>
                    </div>
                </div>
            </div> :
                <Redirect to={"/shop"} />
        )}/>
    )
}

export default SellerIndex
