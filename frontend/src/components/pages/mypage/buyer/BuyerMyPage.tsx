import React, {FC} from 'react'

import './buyerMyPage.css'

import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from "../../../sections/Sidebar";
import Routes from "../../../Routes";

const BuyerMyPage:FC = () => {

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout theme-mode-light theme-color-blue`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default BuyerMyPage
