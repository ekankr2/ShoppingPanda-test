import React, {FC} from "react";
import './badge.css'

interface Props{
    type: string
    content: string
}

const Badge: FC<Props> = ({type, content}) => {
    return (
        <span className={`tableBadge badge-${type}`}>
            {content}
        </span>
    )
}

export default Badge
