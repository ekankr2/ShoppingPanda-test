import React, {FC, Suspense, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Loader from './components/UI/Loader';
import {RootState} from './store';
import {loginCheck} from "./store/actions/authActions";
import Navbar from "./components/sections/navbar/Navbar";
import TestPage from "./components/pages/TestPage";
import {useAuthStore} from "./store/authHooks";

const Homepage = React.lazy(() => import('./components/pages/Homepage'));
const SignUp = React.lazy(() => import('./components/pages/SignIn'));
const SignIn = React.lazy(() => import('./components/pages/SignIn'));
const BuyerIndex = React.lazy(() => import('./components/pages/mypage/buyer/BuyerIndex'));
const PandaIndex = React.lazy(() => import('./components/pages/mypage/panda/PandaIndex'));
const PrivateRoute = React.lazy(() => import('./components/auth/PrivateRoute'));
const SellerIndex = React.lazy(() => import('./components/pages/mypage/seller/SellerIndex'));
const AdminIndex = React.lazy(() => import('./components/pages/mypage/admin/AdminIndex'));

const App: FC = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector((state: RootState) => state.page);
    const reIssue = useAuthStore(state => state.reIssue)

    useLayoutEffect(() => {
        reIssue()
        dispatch(loginCheck())
    }, [dispatch]);

    if (loading) {
        return <Loader/>;
    }

    return (
        <>
        <Navbar/>
        <Suspense fallback={<Loader/>}>
        <Switch>
                <Route path="/" component={Homepage} exact/>
                <Route path="/signup" component={SignUp} exact/>
                <Route path="/signin" component={SignIn} exact/>
                <PrivateRoute path="/buyer" component={BuyerIndex}/>
                <PrivateRoute path="/panda" component={PandaIndex}/>
                <PrivateRoute path="/seller" component={SellerIndex}/>
                <PrivateRoute path="/admin" component={AdminIndex}/>
                <Route path="/test" component={TestPage}/>
            </Switch>
        </Suspense>
        </>
    );
}

export default App;
