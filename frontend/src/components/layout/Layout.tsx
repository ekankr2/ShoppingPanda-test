import React from 'react'

import './layout.css'

import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from "../sections/Sidebar";
import Routes from "../Routes";
import Header from "../sections/Header";

const Layout = () => {

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout theme-mode-light theme-color-blue`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <Header/>
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
