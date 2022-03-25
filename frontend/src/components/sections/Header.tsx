import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from '../UI/Button';
import {useAuthStore} from "../../store/authHooks";

const Header: FC = () => {
  const history = useHistory();
  const signOut = useAuthStore(state => state.signOut)
  const user = useAuthStore(state => state.user)

  const logoutClickHandler = () => {
    signOut()
  }

  return(
    <nav className="navbar is-spaced has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to={"/"}>name</Link>
          <Link className="navbar-item" to={"/buyer/dashboard"}>mypage</Link>
          <Link className="navbar-item" to={"/panda/dashboard"}>pandapage</Link>
          <Link className="navbar-item" to={"/seller/dashboard"}>sellerpage</Link>
          <Link className="navbar-item" to={"/pagination"}>pagination</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-items">
            {!user ? <div className="buttons">
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
