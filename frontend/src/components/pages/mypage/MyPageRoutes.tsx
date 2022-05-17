import React from 'react'

import {Route, Routes} from 'react-router-dom'
import BuyerDashboard from "./buyer/BuyerDashboard";
import OrderListPage from "./buyer/OrderListPage";
import CartPage from "./buyer/CartPage";
import CancelListPage from "./buyer/CancelListPage";
import PandaDashboard from "./panda/PandaDashboard";
import PandaVideoPage from "./panda/PandaVideoPage";
import PandaSettlementPage from "./panda/PandaSettlementPage";
import SellerDashboard from "./seller/SellerDashboard";
import SellerSettlementPage from "./seller/SellerSettlementPage";
import SellerNewOrderPage from "./seller/SellerNewOrderPage";
import BuyerInfoPage from "./buyer/BuyerInfoPage";
import AdminPandaManagementPage from "./admin/AdminPandaManagementPage";
import AdminShopManagementPage from "./admin/AdminShopManagementPage";
import AdminApplyManagementPage from "./admin/AdminApplyManagementPage";


const MyPageRoutes = () => {
    return (
        <Routes>
            <Route path='/panda/dashboard' element={PandaDashboard}/>
            <Route path='/panda/video' element={PandaVideoPage}/>
            <Route path='/panda/settlement' element={PandaSettlementPage}/>

            <Route path='/seller/dashboard' element={SellerDashboard}/>
            <Route path='/seller/settlement' element={SellerSettlementPage}/>
            <Route path='/seller/newOrder' element={SellerNewOrderPage}/>

            <Route path='/admin/pandaManagement' element={AdminPandaManagementPage}/>
            <Route path='/admin/sellerManagement' element={AdminShopManagementPage}/>
            <Route path='/admin/applyManagement' element={AdminApplyManagementPage}/>
        </Routes>
    )
}

export default MyPageRoutes
