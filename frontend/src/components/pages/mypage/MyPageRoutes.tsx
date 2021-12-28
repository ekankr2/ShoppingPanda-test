import React from 'react'

import { Route, Switch } from 'react-router-dom'
import BuyerDashboard from "./buyer/BuyerDashboard";
import OrderListPage from "./buyer/OrderListPage";
import CartPage from "./buyer/CartPage";
import CancelListPage from "./buyer/CancelListPage";


const MyPageRoutes = () => {
    return (
        <Switch>
            <Route path='/buyermypage' exact component={BuyerDashboard}/>
            <Route path='/orderList' exact component={OrderListPage}/>
            <Route path='/cancelList' exact component={CancelListPage}/>
            <Route path='/cart' exact component={CartPage}/>
        </Switch>
    )
}

export default MyPageRoutes
