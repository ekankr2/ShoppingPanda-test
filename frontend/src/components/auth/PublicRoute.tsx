import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import {useAuthStore} from "../../store/authHooks";

interface Props extends RouteProps {
  component: any;
}

const PublicRoute: FC<Props> = ({ component: Component, ...rest }) => {
  const user = useAuthStore(state => state.user);

  return(
    <Route {...rest} render={props => !user ? <Component {...props} /> : <Redirect to="/" />} />
  );
}

export default PublicRoute;
