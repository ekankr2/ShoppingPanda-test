import React from 'react'

import { Route, Switch } from 'react-router-dom'
import BuyerDashboard from "./buyer/BuyerDashboard";
import OrderListPage from "./buyer/OrderListPage";
import CartPage from "./buyer/CartPage";
import CancelListPage from "./buyer/CancelListPage";
import PandaDashboard from "./panda/PandaDashboard";
import PandaVideoPage from "./panda/PandaVideoPage";


const MyPageRoutes = () => {
    return (
        <Switch>
            <Route path='/buyer/dashboard' exact component={BuyerDashboard}/>
            <Route path='/buyer/orderList' exact component={OrderListPage}/>
            <Route path='/buyer/cancelList' exact component={CancelListPage}/>
            <Route path='/buyer/cart' exact component={CartPage}/>

            <Route path='/panda/dashboard' exact component={PandaDashboard}/>
            <Route path='/panda/video' exact component={PandaVideoPage}/>
        </Switch>
    )
}

export default MyPageRoutes
