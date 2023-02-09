import React from 'react';
import "./menu-item.css"
function MenuItem(props) {
    return (
        <li className='menu-item'>
            <a href={props.links}>
                {props.text}
            </a>
        </li>
    )
}

export default MenuItem;