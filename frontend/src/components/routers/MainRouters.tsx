import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";

const Homepage = lazy(() => import ("../pages/Homepage"))
const Navbar = lazy(() => import ("../sections/navbar/Navbar"))
const AdminIndex = lazy(() => import ("../pages/mypage/admin/AdminIndex"))
const PandaIndex = lazy(() => import ("../pages/mypage/panda/PandaIndex"))
const SignIn = lazy(() => import ("../pages/SignIn"))
const BuyerIndex = lazy(() => import ("../pages/mypage/buyer/BuyerIndex"))
const SignUp = lazy(() => import ("../pages/SignUp"))
const SellerIndex = lazy(() => import ("../pages/mypage/seller/SellerIndex"))
const TestPage = lazy(() => import ("../pages/TestPage"))
const PrivateRoute = lazy(() => import ("../auth/PrivateRoute"))
const Loader = lazy(() => import ("../UI/Loader"))

const MainRouters = () => {
    return (
        <>
            <Navbar/>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="" element={<Homepage/>} />
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    {/*<PrivateRoute path="/buyer" component={BuyerIndex}/>*/}
                    {/*<PrivateRoute path="/panda" component={PandaIndex}/>*/}
                    {/*<PrivateRoute path="/seller" component={SellerIndex}/>*/}
                    {/*<PrivateRoute path="/admin" component={AdminIndex}/>*/}
                    <Route path="/test" element={<TestPage/>}/>
                </Routes>
            </Suspense>
        </>
    );
};

export default MainRouters;