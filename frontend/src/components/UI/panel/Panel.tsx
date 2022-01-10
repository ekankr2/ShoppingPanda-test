import React, {FC, ReactNode} from 'react';
import "./panel.css"

interface Props {
    title: string
    className: string
    children: ReactNode
}

const Panel: FC<Props> = ({title, className, children}) => {
    return (
        <div className="container panel-container">
            <article className={`panel ${className}`}>
                <p className="panel-heading has-text-centered">{title}</p>
                <div className="panel-block">
                    {children}
                </div>
            </article>

        </div>
    );
};

export default Panel;
