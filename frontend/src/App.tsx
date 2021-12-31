import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './components/sections/Header';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Homepage from './components/pages/Homepage';
import Loader from './components/UI/Loader';
import { RootState } from './store';
import {setLoading} from "./store/actions/pageActions";
import BuyerIndex from "./components/pages/mypage/buyer/BuyerIndex";
import PandaIndex from "./components/pages/mypage/panda/PandaIndex";

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
      <>
        <Header />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/buyer" component={BuyerIndex} />
          <Route path="/panda" component={PandaIndex} />
        </Switch>
      </>
  );
}

export default App;
