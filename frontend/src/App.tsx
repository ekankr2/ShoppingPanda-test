import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/sections/Header';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Homepage from './components/pages/Homepage';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/auth/PrivateRoute';
import PublicRoute from './components/auth/PublicRoute';
import Loader from './components/UI/Loader';
import { RootState } from './store';
import {setLoading} from "./store/actions/pageActions";
import BuyerMyPage from "./components/pages/mypage/buyer/BuyerMyPage";
import BuyerDashboard from "./components/pages/mypage/buyer/BuyerDashboard";

const App: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.page);

  // Check if user exists
  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
  //     if(user) {
  //       dispatch(setLoading(true));
  //       await dispatch(getUserById(user.uid));
  //       if(!user.emailVerified) {
  //         dispatch(setNeedVerification());
  //       }
  //     }
  //     dispatch(setLoading(false));
  //   });
  //
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [dispatch]);

  if(loading) {
    return <Loader />;
  }

  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <PublicRoute path="/" component={Homepage} exact />
          <PublicRoute path="/signup" component={SignUp} exact />
          <PublicRoute path="/signin" component={SignIn} exact />
          <PublicRoute path="/buyer/mypage" component={BuyerMyPage} exact />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
