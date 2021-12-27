import React from 'react'

import { Route, Switch } from 'react-router-dom'
import BuyerDashboard from "./pages/mypage/buyer/BuyerDashboard";
import CartPage from "./pages/mypage/CartPage";

const Routes = () => {
    return (
        <Switch>
            <Route path='/mypage' exact component={BuyerDashboard}/>
            <Route path='/cart' exact component={CartPage}/>
        </Switch>
    )
}

export default Routes
