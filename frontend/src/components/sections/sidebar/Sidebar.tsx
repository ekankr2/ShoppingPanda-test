import React, {FC} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './sidebar.css'
import logo from '../../../assets/images/logo.png'

export interface SidebarProps {
    sidebarItems: any
}

export interface StringObj{
    [key:string]:string
}

const Sidebar : FC<SidebarProps> = ({sidebarItems}) => {
    const location = useLocation()

    const activeItem = sidebarItems.findIndex((item: StringObj) => item.route === location.pathname)

    return (
        <>
            <div className='sidebar'>
                <Link to="/">
                    <div className="sidebar__logo">
                        <img src={logo} alt="company logo" />
                    </div>
                </Link>
                {
                    sidebarItems.map((item:StringObj, index:number) => (
                        <Link to={item.route} key={index}>
                            <SidebarItem
                                title={item.display_name}
                                icon={item.icon}
                                active={index === activeItem}
                            />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

interface ItemProps {
    title?: string
    icon: string
    active: boolean
}

const SidebarItem : FC<ItemProps> = (props) => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

export default Sidebar
