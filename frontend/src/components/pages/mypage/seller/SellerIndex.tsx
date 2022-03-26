import React, {FC} from 'react'
import '../buyer/buyerIndex.css'
import {Redirect, Route} from 'react-router-dom'
import {sellerSidebarItems} from "./sellerTypes";
import MyPageRoutes from "../MyPageRoutes";
import Sidebar from "../../../sections/sidebar/Sidebar";
import {useAuthStore} from "../../../../store/authHooks";

const SellerIndex:FC = () => {
    const user = useAuthStore(state => state.user)

    return (
        <Route render={(props) => (
            user?.shop ?
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
