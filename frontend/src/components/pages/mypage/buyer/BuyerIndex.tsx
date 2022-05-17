import React, {FC} from 'react'
import './buyerIndex.css'
import {Route, Routes} from 'react-router-dom'
import {buyerSidebarItems} from "./buyerTypes";
import MyPageRoutes from "../MyPageRoutes";
import Sidebar from "../../../sections/sidebar/Sidebar";
import BuyerDashboard from "./BuyerDashboard";
import OrderListPage from "./OrderListPage";
import CancelListPage from "./CancelListPage";
import CartPage from "./CartPage";
import BuyerInfoPage from "./BuyerInfoPage";

const BuyerIndex: FC = () => {

    return (
        <>
            <Routes>
                <Route path='*' element={
                    <div className={`layout theme-mode-light theme-color-cyan`}>
                        <Sidebar sidebarItems={buyerSidebarItems}/>
                        <div className="layout__content">
                            <div className="layout__content-main">
                                <Routes>
                                    <Route path='dashboard' element={<BuyerDashboard/>}/>
                                    <Route path='orderList' element={<OrderListPage/>}/>
                                    <Route path='cancelList' element={<CancelListPage/>}/>
                                    <Route path='cart' element={<CartPage/>}/>
                                    <Route path='infoPage' element={<BuyerInfoPage/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>}
                />
            </Routes>
        </>
    )
}

export default BuyerIndex
