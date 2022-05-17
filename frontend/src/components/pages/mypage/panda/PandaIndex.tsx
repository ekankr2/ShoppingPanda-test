import React, {FC} from 'react';
import '../buyer/buyerIndex.css'
import MyPageRoutes from "../MyPageRoutes";
import {Navigate, Route, Routes} from "react-router-dom";
import {pandaSidebarItems} from "./pandaTypes";
import Sidebar from "../../../sections/sidebar/Sidebar";
import {useAuthStore} from "../../../../store/authHooks";
import PandaDashboard from "./PandaDashboard";
import PandaVideoPage from "./PandaVideoPage";
import PandaSettlementPage from "./PandaSettlementPage";

const PandaIndex: FC = () => {
    const user = useAuthStore(state => state.user)

    if (user?.panda) {
        return (
            <Routes>
                <Route path='*' element={
                    <div className={`layout theme-mode-light theme-color-red`}>
                        <Sidebar sidebarItems={pandaSidebarItems}/>
                        <div className="layout__content">
                            <div className="layout__content-main">
                                <Routes>
                                    <Route path='dashboard' element={<PandaDashboard/>}/>
                                    <Route path='video' element={<PandaVideoPage/>}/>
                                    <Route path='settlement' element={<PandaSettlementPage/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                }/>
            </Routes>
        )
    }

    return <Navigate to={'/panda'}/>
};

export default PandaIndex;
