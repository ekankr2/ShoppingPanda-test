import React, {FC} from 'react';

interface Props {
    text: string
    dropItems: (string)[]
}

const Dropdown: FC<Props> = ({text, dropItems}) => {
    return (
        <div className="dropdown is-active">
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>{text}</span>
                    <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    {
                        dropItems.map((item, idx) =>
                            <>
                                <a className="dropdown-item">
                                    {item}
                                </a>
                                <hr className="dropdown-divider"/>
                            </>


                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
