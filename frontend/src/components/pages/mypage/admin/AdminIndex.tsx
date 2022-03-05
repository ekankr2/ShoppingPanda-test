import React, {FC} from 'react';
import '../buyer/buyerIndex.css'
import MyPageRoutes from "../MyPageRoutes";
import {Route} from "react-router-dom";
import {adminSidebarItems} from "./adminTypes";
import Sidebar from "../../../sections/sidebar/Sidebar";


const AdminIndex: FC = () => {

    return (
        <Route render={(props) => (
            <div className={`layout theme-mode-dark theme-color-cyan`}>
                <Sidebar sidebarItems={adminSidebarItems} {...props}/>
                <div className="layout__content">
                    <div className="layout__content-main">
                        <MyPageRoutes/>
                    </div>
                </div>
            </div>
        )}/>
    );
};

export default AdminIndex;
