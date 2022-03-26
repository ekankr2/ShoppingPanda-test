import React, {FC} from 'react';
import '../buyer/buyerIndex.css'
import MyPageRoutes from "../MyPageRoutes";
import {Redirect, Route} from "react-router-dom";
import {pandaSidebarItems} from "./pandaTypes";
import Sidebar from "../../../sections/sidebar/Sidebar";
import {useAuthStore} from "../../../../store/authHooks";

const PandaIndex: FC = () => {
    const user = useAuthStore(state => state.user)

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
