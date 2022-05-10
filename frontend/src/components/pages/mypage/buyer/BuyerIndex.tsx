import React, {FC} from 'react'
import './buyerIndex.css'
import {Route, Routes} from 'react-router-dom'
import {buyerSidebarItems} from "./buyerTypes";
import MyPageRoutes from "../MyPageRoutes";
import Sidebar from "../../../sections/sidebar/Sidebar";

const BuyerIndex: FC = () => {

    return (
        <>
            <Routes>
                <Route element={
                    <div className={`layout theme-mode-light theme-color-cyan`}>
                        <Sidebar sidebarItems={buyerSidebarItems}/>
                        <div className="layout__content">
                            <div className="layout__content-main">
                                <MyPageRoutes/>
                            </div>
                        </div>
                    </div>}
                />
            </Routes>
        </>
    )
}

export default BuyerIndex
