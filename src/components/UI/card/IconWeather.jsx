import React from 'react';
import sunPath from './img/sun.png'
import rainPath from './img/rain.png'
import mistPath from './img/mist.png'
import snowPath from './img/snow.png'
import cloudPath from './img/cloud.png'
import './Card.css'

const IconWeather = function ({weather}) {
    return (  
        <div className='icon_weather'>
            {
                weather?.weather[0].main == 'Rain' ? (<img src={rainPath} alt="rain" />) : 
                weather?.weather[0].main == 'Clear' ? (<img src={sunPath} alt="clear" />) :
                weather?.weather[0].main == 'Mist' ? (<img src={mistPath} alt="mist" />) :
                weather?.weather[0].main == 'Snow' ? (<img src={snowPath} alt="snow" />) :
                weather?.weather[0].main == 'Clouds' ? (<img src={cloudPath} alt="clouds" />) :
                (<p>unknown</p>)
            }
        </div>
    );
}

export default IconWeather;