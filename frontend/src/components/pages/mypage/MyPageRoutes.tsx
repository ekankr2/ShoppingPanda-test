import React from 'react'

import { Route, Switch } from 'react-router-dom'
import BuyerDashboard from "./buyer/BuyerDashboard";
import OrderListPage from "./buyer/OrderListPage";
import CartPage from "./buyer/CartPage";
import CancelListPage from "./buyer/CancelListPage";


const MyPageRoutes = () => {
    return (
        <Switch>
            <Route path='/buyer/mypage' exact component={BuyerDashboard}/>
            <Route path='/buyer/orderList' exact component={OrderListPage}/>
            <Route path='/buyer/cancelList' exact component={CancelListPage}/>
            <Route path='/buyer/cart' exact component={CartPage}/>

            {/*panda*/}
            <Route path='/panda/mypage' exact component={CartPage}/>
        </Switch>
    )
}

export default MyPageRoutes
