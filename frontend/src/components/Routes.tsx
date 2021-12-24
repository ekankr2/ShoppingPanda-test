import React from 'react'

import { Route, Switch } from 'react-router-dom'
import BuyerDashboard from "./pages/mypage/buyer/BuyerDashboard";

const Routes = () => {
    return (
        <Switch>
            <Route path='/mypage' exact component={BuyerDashboard}/>
            <Route path='/customers' exact component={BuyerDashboard}/>
        </Switch>
    )
}

export default Routes
