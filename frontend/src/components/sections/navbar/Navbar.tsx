import React, {FC, useState} from 'react';
import './navbar.css'
import {Link, useHistory} from "react-router-dom";
import Dropdown from "../../UI/dropdown/Dropdown";
import {notification_dummy, user_menu, panda_menu, seller_menu} from "./navbarTypes";
import {useDispatch, useSelector} from "react-redux";
import {signout} from "../../../store/actions/authActions";
import {RootState} from "../../../store";
import Button from "../../UI/Button";
import {getCookie} from "../../../store/actions/Cookie";

const renderNotificationItem = (item: StringObj, index: number) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const Navbar: FC = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const {user} = useSelector((state: RootState) => state.auth);
    const [userId] = useState(getCookie('userId'))

    console.log('유저데이타: ',user)

    const renderUserToggle = () => (
        <div className="topnav__right-user">
            <div className="topnav__right-user__image">
                {/*<img src={user.image} alt=""/>*/}
            </div>
            <div className="topnav__right-user__name">
                {userId}
            </div>
        </div>
    )

    const renderUserMenu = (item: StringObj, index: number) => (
            <div key={index}>
                {
                    item.link === "/logout" ?
                        <a onClick={() => {
                            dispatch(signout())
                        }} key={index}>
                            <div className="notification-item">
                                <i className={item.icon}></i>
                                <span>{item.content}</span>
                            </div>
                        </a> :
                        <Link to={item.link} key={index}>
                            <div className="notification-item">
                                <i className={item.icon}></i>
                                <span>{item.content}</span>
                            </div>
                        </Link>
                }
            </div>
    )

    const renderAuthMenu = (panda: any, seller: any) => {
        if(panda && seller) {
            return user_menu
        }
        if(panda){
            return panda_menu
        }
        if(seller){
            return seller_menu
        }
        return user_menu
    }

    return (
        <nav className="navbar is-spaced has-shadow">
            <Link className="navbar-item" to={'/'}>
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
            </Link>

            {user ? <div className="navbar-end">
                    <div className="navbar-menu">
                        <span className="mr-3">
                            <Dropdown
                                customToggle={() => renderUserToggle()}
                                contentData={renderAuthMenu(user.panda, user.shop)}
                                renderItems={(item: StringObj, index: number) => renderUserMenu(item, index)}
                            />
                        </span>
                        <span className="mr-3">
                            <Dropdown
                                icon='bx bx-bell'
                                badge='12'
                                contentData={notification_dummy}
                                renderItems={(item: StringObj, index: number) => renderNotificationItem(item, index)}
                                renderFooter={() => <Link to='/'>View All</Link>}
                            />
                        </span>

                    </div>
                </div> :
                <div className="navbar-end">
                    <div className="navbar-menu">
                        <div className="buttons">
                            <Button text="회원가입" onClick={() => history.push('/signup')} className="is-primary" />
                            <Button text="로그인" onClick={() => history.push('/signin')}/>
                        </div>
                    </div>
                </div>
            }

        </nav>
    );
};

export default Navbar;
