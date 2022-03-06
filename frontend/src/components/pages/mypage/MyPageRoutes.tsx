import React from 'react'

import { Route, Switch } from 'react-router-dom'
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
import AdminPandaManagement from "./admin/AdminPandaManagement";
import AdminShopManagement from "./admin/AdminShopManagement";
import AdminApplyManagementPage from "./admin/AdminApplyManagementPage";


const MyPageRoutes = () => {
    return (
        <Switch>
            <Route path='/buyer/dashboard' exact component={BuyerDashboard}/>
            <Route path='/buyer/orderList' exact component={OrderListPage}/>
            <Route path='/buyer/cancelList' exact component={CancelListPage}/>
            <Route path='/buyer/cart' exact component={CartPage}/>
            <Route path='/buyer/infoPage' exact component={BuyerInfoPage}/>

            <Route path='/panda/dashboard' exact component={PandaDashboard}/>
            <Route path='/panda/video' exact component={PandaVideoPage}/>
            <Route path='/panda/settlement' exact component={PandaSettlementPage}/>

            <Route path='/seller/dashboard' exact component={SellerDashboard}/>
            <Route path='/seller/settlement' exact component={SellerSettlementPage}/>
            <Route path='/seller/newOrder' exact component={SellerNewOrderPage}/>

            <Route path='/admin/pandaManagement' exact component={AdminPandaManagement}/>
            <Route path='/admin/sellerManagement' exact component={AdminShopManagement}/>
            <Route path='/admin/applyManagement' exact component={AdminApplyManagementPage}/>
        </Switch>
    )
}

export default MyPageRoutes
