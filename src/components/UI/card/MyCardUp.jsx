import React from 'react';
import { useSelector } from 'react-redux';
import './Card.css'
import IconWeather from './IconWeather';
import { weatherDescriptions } from '../../../services/description.service';

const MyCardUp = function () {
    const {weather} = useSelector((state) => state)
    const description = weatherDescriptions[weather?.weather[0].description] || `${weather?.weather[0].description}`;
    return (  
        <div className='card__main'>
            <div className="card_left">
            {
                <IconWeather weather={weather}/>
            }
            </div>
            <div className="card_right">
                <strong>Город: {weather?.name}</strong>
                <span>Температура: {weather?.main.temp}°С</span>
                <span>Ситуация: {description}</span>
            </div>
        </div>
    );
}

export default MyCardUp;