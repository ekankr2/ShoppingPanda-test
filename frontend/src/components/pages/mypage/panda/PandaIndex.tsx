import React, {FC, useState} from 'react';
import '../buyer/buyerIndex.css'
import MyPageRoutes from "../MyPageRoutes";
import {Redirect, Route} from "react-router-dom";
import {pandaSidebarItems} from "./pandaTypes";
import Sidebar from "../../../sections/sidebar/Sidebar";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";

const PandaIndex: FC = () => {
    const {user} = useSelector((state: RootState) => state.auth);

    return (
        <Route render={(props) => (
            user?.panda ?
            <div className={`layout theme-mode-light theme-color-red`}>
                <Sidebar sidebarItems={pandaSidebarItems} {...props}/>
                <div className="layout__content">
                    <div className="layout__content-main">
                        <MyPageRoutes/>
                    </div>
                </div>
            </div> :
                <Redirect to={'/panda'}/>
        )}/>
    );
};

export default PandaIndex;
