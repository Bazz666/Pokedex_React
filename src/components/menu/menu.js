import MenuItem from "../menuItem/menu-item"
import React from 'react';
import "./menu.css"
function Menu(){
    return (
    <header className="menu-wrapper">
        <nav>
            <ul className="menu">
            
                <MenuItem
                    text="Home"
                    link="/"
                />     
                <MenuItem
                    text="Pokemon"
                    link="/pokemon"
                />  
                <MenuItem
                    text="Tipos"
                    link="/tipos"
                />  
            </ul>
        </nav>
  </header>
    )
}
export default Menu;