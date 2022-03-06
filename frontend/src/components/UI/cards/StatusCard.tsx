import React, {FC, MouseEventHandler} from "react";
import './statuscard.css'
import { Link } from 'react-router-dom'

interface Props{
    link: string
    icon: string
    count: number
    title: string
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>
}

const StatusCard: FC<Props> = ({link, icon, count, title, onClick}) => {
    return (
        <Link to={link}>
            <div className="status-card" id={title} onClick={onClick}>
                <div className="status-card__icon">
                    <i className={icon}></i>
                </div>
                <div className="status-card__info">
                    <h4>{count}</h4>
                    <span>{title}</span>
                </div>
            </div>
        </Link>

    )
}

export default StatusCard
