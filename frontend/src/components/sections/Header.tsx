import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../UI/Button';
import { RootState } from '../../store';
import {signout} from '../../store/actions/authActions';

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return(
    <nav className="navbar is-spaced has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to={"/"}>name</Link>
          <Link className="navbar-item" to={"/buyer/dashboard"}>mypage</Link>
          <Link className="navbar-item" to={"/panda/dashboard"}>pandapage</Link>
          <Link className="navbar-item" to={"/pagination"}>pagination</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-items">
            {!loggedIn ? <div className="buttons">
                <Button text="Sign up" onClick={() => history.push('/signup')} className="is-primary" />
                <Button text="Sign in" onClick={() => history.push('/signin')} />
              </div>
              :
              <Button text="Sign out" onClick={logoutClickHandler} />
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
