import React, {FC, Suspense, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Loader from './components/UI/Loader';
import {RootState} from './store';
import {loginCheck} from "./store/actions/authActions";
import Navbar from "./components/sections/navbar/Navbar";
import axios from "axios";
import TestPage from "./components/pages/TestPage";

const Homepage = React.lazy(() => import('./components/pages/Homepage'));
const SignUp = React.lazy(() => import('./components/pages/SignIn'));
const SignIn = React.lazy(() => import('./components/pages/SignIn'));
const BuyerIndex = React.lazy(() => import('./components/pages/mypage/buyer/BuyerIndex'));
const PandaIndex = React.lazy(() => import('./components/pages/mypage/panda/PandaIndex'));
const PrivateRoute = React.lazy(() => import('./components/auth/PrivateRoute'));
const PaginationTest = React.lazy(() => import('./components/pages/SignIn'));
const SellerIndex = React.lazy(() => import('./components/pages/mypage/seller/SellerIndex'));

const check = async () => {
    try {
        const res = await axios.post('/api/userauth')
        console.log(res.data)
    } catch (err) {
        console.error(err)
    }
}

const App: FC = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector((state: RootState) => state.page);

    useEffect(() => {
        dispatch(loginCheck())
        check()
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
                    <Route path="/pagination" component={PaginationTest} exact/>
                    <PrivateRoute path="/buyer" component={BuyerIndex}/>
                    <PrivateRoute path="/panda" component={PandaIndex}/>
                    <PrivateRoute path="/seller" component={SellerIndex}/>
                    <Route path="/test" component={TestPage}/>
                </Switch>
            </Suspense>
        </>
    );
}

export default App;
