import React from 'react';
import "./button.css";

function Button(props) {
  return(
    <div className='button_box'>
      <button className='btn' onClick={props.handleClick}> {props.icon}</button>  
      <div className='button_shadow'></div>
    </div>
  );
}
export default Button;
