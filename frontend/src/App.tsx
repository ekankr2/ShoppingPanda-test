import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './components/sections/Header';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Homepage from './components/pages/Homepage';
import Loader from './components/UI/Loader';
import {RootState} from './store';
import BuyerIndex from "./components/pages/mypage/buyer/BuyerIndex";
import PandaIndex from "./components/pages/mypage/panda/PandaIndex";
import PrivateRoute from "./components/auth/PrivateRoute";
import {loginCheck} from "./store/actions/authActions";
import PaginationTest from "./components/pages/PaginationTest";
import SellerIndex from "./components/pages/mypage/seller/SellerIndex";
import Navbar from "./components/sections/navbar/Navbar";

const App: FC = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector((state: RootState) => state.page);

    useEffect(() => {
        dispatch(loginCheck())
    }, [dispatch]);

    if (loading) {
        return <Loader/>;
    }

    return (
        <>
            <Header/>
            {/*<Navbar/>*/}
            <Switch>
                <Route path="/" component={Homepage} exact/>
                <Route path="/signup" component={SignUp} exact/>
                <Route path="/signin" component={SignIn} exact/>
                <Route path="/pagination" component={PaginationTest} exact />
                <PrivateRoute path="/buyer" component={BuyerIndex}/>
                <PrivateRoute path="/panda" component={PandaIndex}/>
                <PrivateRoute path="/seller" component={SellerIndex}/>
            </Switch>
        </>
    );
}

export default App;
