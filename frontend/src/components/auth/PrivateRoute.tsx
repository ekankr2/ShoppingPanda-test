import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { RootState } from '../../store';

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
  const { loggedIn } = useSelector((state: RootState) => state.auth);

  return(
    <Route {...rest} render={props => loggedIn ? <Component {...props} /> :
        <Redirect to={{pathname:"/signin", state: { next: props.location.pathname } }} />} />
  );
}

export default PrivateRoute;
