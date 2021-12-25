import React from 'react'

import { Route, Switch } from 'react-router-dom'
import BuyerDashboard from "./pages/mypage/buyer/BuyerDashboard";
import Cart from "./pages/mypage/Cart";

const Routes = () => {
    return (
        <Switch>
            <Route path='/mypage' exact component={BuyerDashboard}/>
            <Route path='/cart' exact component={Cart}/>
        </Switch>
    )
}

export default Routes
