import React, {FC} from 'react';
import './navbar.css'
import Button from "../../UI/Button";

const Navbar: FC = () => {
    return (
        <nav className="navbar is-spaced has-shadow">
            <div className="container">
                <div className="navbar-end">
                    <Button text="로그인"/>
                    <div className="navbar-items">
                        <div className="navbar-icons">
                            <a className="navbar-icon"><i className="bx bx-bell"></i></a>
                            <a className="navbar-icon"><i className="bx bxs-chevron-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
