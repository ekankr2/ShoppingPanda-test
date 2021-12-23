import React, {FC, useRef} from 'react'

import './dropdown.css'

const clickOutsideRef = (content_ref:any, toggle_ref:any) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

interface Props {
    customToggle: any
    contentData: any
    renderItems: any
    renderFooter?: any
    icon?: string
    badge?: string
}

const Dropdown : FC<Props> = (props) => {

    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)

    return (
        <div className='dropdown'>
        <button ref={dropdown_toggle_el} className="dropdown__toggle">
        {
            props.icon ? <i className={props.icon}></i> : ''
        }
    {
        props.badge ? <span className='dropdown__toggle-badge'>{props.badge}</span> : ''
    }
    {
        props.customToggle ? props.customToggle() : ''
    }
    </button>
    <div ref={dropdown_content_el} className="dropdown__content">
        {
            props.contentData && props.renderItems ? props.contentData.map((item:string, index:number) => props.renderItems(item, index)) : ''
        }
    {
        props.renderFooter ? (
            <div className="dropdown__footer">
                {props.renderFooter()}
                </div>
        ) : ''
    }
    </div>
    </div>
)
}

export default Dropdown
