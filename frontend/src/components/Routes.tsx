import React from 'react'

import { Route, Switch } from 'react-router-dom'
import BuyerDashboard from "./pages/mypage/buyer/BuyerDashboard";
import CartPage from "./pages/mypage/buyer/CartPage";
import OrderListPage from "./pages/mypage/buyer/OrderListPage";

const Routes = () => {
    return (
        <Switch>
            <Route path='/buyermypage' exact component={BuyerDashboard}/>
            <Route path='/orderList' exact component={OrderListPage}/>
            <Route path='/cart' exact component={CartPage}/>
        </Switch>
    )
}

export default Routes
