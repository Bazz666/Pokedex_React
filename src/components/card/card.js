import React from 'react';
import "./card.css";

import Button from '../button/button';
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";

const Card = ({ name, img, types, number, description, prevClick, nextClick }) => {
    


    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-header-title">{name}</h3>
                <span className="card-header-number">#{number}</span>
            </div>
            <div className="card-body">
                <div className="card-image-container">
                    <img className="card-image" src={img} alt={`Imagen de ${name}`} />
                    <div className="card-types">
                        {Array.isArray(types) ? types.map((type, index) => (
                            <span key={index} className="card-type">
                                {type}
                            </span>
                        )) : null}
                    </div>
                </div>
                <div className="card-info">
                    <div className="card-description">
                        {description ? <p>{description}</p> : <p>No se encontró descripción</p>}
                    </div>
                </div>
            </div>
            <div className='card-button-container'>
                <Button
                    icon={<TiArrowLeftOutline />}
                    handleClick={prevClick}
                />
                <Button
                    icon={<TiArrowRightOutline />}
                    handleClick={nextClick}
                />
            </div>
           
        </div>
    );
};

export default Card;
