import React, {FC} from "react";
import './statuscard.css'
import { Link } from 'react-router-dom'

interface Props{
    link: string
    icon: string
    count: number
    title: string
}

const StatusCard: FC<Props> = ({link, icon, count, title}) => {
    return (
        <Link to={link}>
            <div className="status-card">
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
