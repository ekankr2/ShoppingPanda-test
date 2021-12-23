import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import PandaDashboard from "./pages/mypage/panda/PandaDashboard";

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/panda' exact component={PandaDashboard}/>
        </Switch>
    )
}

export default Routes
