import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './components/sections/Header';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Homepage from './components/pages/Homepage';
import Loader from './components/UI/Loader';
import {RootState} from './store';
import BuyerIndex from "./components/pages/mypage/buyer/BuyerIndex";
import PandaIndex from "./components/pages/mypage/panda/PandaIndex";
import {setLoading} from "./store/actions/pageActions";
import PrivateRoute from "./components/auth/PrivateRoute";
import {getCookie} from "./store/actions/Cookie";
import {loginCheck} from "./store/actions/authActions";
import PublicRoute from "./components/auth/PublicRoute";

const App: FC = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector((state: RootState) => state.page);
    const {loggedIn} = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        dispatch(loginCheck())
    }, [dispatch]);

    if (loading) {
        return <Loader/>;
    }

    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" component={Homepage} exact/>
                <PublicRoute path="/signup" component={SignUp} exact/>
                <PublicRoute path="/signin" component={SignIn} exact/>
                <PrivateRoute path="/buyer" component={BuyerIndex}/>
                <PrivateRoute path="/panda" component={PandaIndex}/>
            </Switch>
        </>
    );
}

export default App;
