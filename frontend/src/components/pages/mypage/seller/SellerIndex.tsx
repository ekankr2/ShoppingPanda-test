import React, {FC} from 'react'
import '../buyer/buyerIndex.css'
import {Navigate, Route, Routes} from 'react-router-dom'
import {sellerSidebarItems} from "./sellerTypes";
import Sidebar from "../../../sections/sidebar/Sidebar";
import {useAuthStore} from "../../../../store/authHooks";
import SellerDashboard from "./SellerDashboard";
import SellerSettlementPage from "./SellerSettlementPage";
import SellerNewOrderPage from "./SellerNewOrderPage";

const SellerIndex: FC = () => {
    const user = useAuthStore(state => state.user)

    if (user) {
        return (
            <Routes>
                <Route path='*' element={
                    <div className={`layout theme-mode-light theme-color-blue`}>
                        <Sidebar sidebarItems={sellerSidebarItems}/>
                        <div className="layout__content">
                            <div className="layout__content-main">
                                <Routes>
                                    <Route path='dashboard' element={<SellerDashboard/>}/>
                                    <Route path='settlement' element={<SellerSettlementPage/>}/>
                                    <Route path='newOrder' element={<SellerNewOrderPage/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                }/>
            </Routes>
        )
    }

    return <Navigate to={"/shop"}/>
}

export default SellerIndex
