import React, {FC} from 'react';
import {Navigate, Outlet} from 'react-router-dom';

import {useAuthStore} from "../../store/authHooks";

const PrivateRoute: FC = ( ) => {
  const user = useAuthStore(state => state.user);

  if(!user){
    return <Navigate to={'signIn'} />
  }

  return <Outlet/>
}

export default PrivateRoute;
