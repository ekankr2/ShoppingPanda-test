import React, {FC, ReactElement} from 'react';
import {RouteProps, Navigate} from 'react-router-dom';

import {useAuthStore} from "../../store/authHooks";

interface Props extends RouteProps {
  children: ReactElement
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const user = useAuthStore(state => state.user);

  if(!user){
    return <Navigate to={'signIn'} />
  }

  return children
}

export default PrivateRoute;
