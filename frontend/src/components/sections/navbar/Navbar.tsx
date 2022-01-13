import React, {FC} from 'react';
import './navbar.css'

const Navbar: FC = () => {
    return (
        <nav className="navbar is-spaced has-shadow">
            <div className="container">
                <div className="navbar-end">
                    <div className="navbar-items">
                        <div className="navbar-icons">
                            <a className="navbar-icon"><i className="bx bx-bell"></i></a>
                            <a className="navbar-icon"><i className="bx bx-bell"></i></a>
                            <a className="navbar-icon"><i className="bx bx-bell"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
