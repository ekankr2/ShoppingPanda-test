import React, {FC} from 'react';
import '../buyer/buyerIndex.css'
import {Route, Routes} from "react-router-dom";
import {adminSidebarItems} from "./adminTypes";
import Sidebar from "../../../sections/sidebar/Sidebar";
import {useAuthStore} from "../../../../store/authHooks";
import AdminPandaManagementPage from "./AdminPandaManagementPage";
import AdminShopManagementPage from "./AdminShopManagementPage";
import AdminApplyManagementPage from "./AdminApplyManagementPage";


const AdminIndex: FC = () => {
    const user = useAuthStore(state => state.user)

    return (
        <Routes>
            <Route path="*" element={
                <div className={`layout theme-mode-dark theme-color-red`}>
                    <Sidebar sidebarItems={adminSidebarItems}/>
                    <div className="layout__content">
                        <div className="layout__content-main">
                            <Routes>
                                <Route path='pandaManagement' element={<AdminPandaManagementPage/>}/>
                                <Route path='sellerManagement' element={<AdminShopManagementPage/>}/>
                                <Route path='applyManagement' element={<AdminApplyManagementPage/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            }/>
        </Routes>
    );
};

export default AdminIndex;
