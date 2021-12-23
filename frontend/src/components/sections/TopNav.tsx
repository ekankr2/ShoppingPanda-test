import React, {FC} from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import notifications from '../../assets/JsonData/notification.json'

import user_image from '../../assets/images/tuat.png'

import user_menu from '../../assets/JsonData/user_menus.json'
import Dropdown from "../UI/dropdown/Dropdown";

const curr_user = {
    display_name: 'Tuat Tran',
    image: user_image
}

interface Params{
    [index: string]: string
}

const renderNotificationItem = (item: Params, index: number) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user:Params) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu =(item:Params, index:number) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav : FC = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item: Params, index: number) => renderUserMenu(item, index)}
                    />
                </div>
                {/*<div className="topnav__right-item">*/}
                {/*    <Dropdown*/}
                {/*        icon='bx bx-bell'*/}
                {/*        badge='12'*/}
                {/*        contentData={notifications}*/}
                {/*        renderItems={(item:string, index:number) => renderNotificationItem(item, index)}*/}
                {/*        renderFooter={() => <Link to='/'>View All</Link>}*/}
                {/*    />*/}
                {/*    /!* dropdown here *!/*/}
                {/*</div>*/}
                <div className="topnav__right-item">
                    {/*<ThemeMenu/>*/}
                </div>
            </div>
        </div>
    )
}

export default Topnav
