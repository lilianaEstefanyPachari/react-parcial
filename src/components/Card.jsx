import React from 'react';
import food from '../assets/food.jpg'

const Card = ({name, favorite}) => {
    return (
        <div className='card'>
            <img className='food' src={food} />
            <div className='user-info'>
            <p className='card-text'>Hola {name}</p>
            <p className='card-text'>Tu comida favorita es: {favorite}</p>
            </div>
        </div>
    );
}

export default Card;
