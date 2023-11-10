import React from 'react';
import sunPath from './img/sun.png'
import rainPath from './img/rain.png'
import mistPath from './img/mist.png'
import snowPath from './img/snow.png'
import cloudPath from './img/cloud.png'
import { useSelector } from 'react-redux';
import './Card.css'

const MyCardDown = function () {
    const {weathers} = useSelector((state) => state)
    return (  
        <div className='card_down'>
                <div className='card_items'>
                    {
                        weathers?.list?.slice(1,6).map((day,index) => (
                            <div key={index} className='card_item'>
                                <div className='card_item_img'>
                                {
                                    day?.weather[0].main == 'Rain' ? (<img src={rainPath} alt="rain" />) : 
                                    day?.weather[0].main == 'Clear' ? (<img src={sunPath} alt="clear" />) :
                                    day?.weather[0].main == 'Mist' ? (<img src={mistPath} alt="mist" />) :
                                    day?.weather[0].main == 'Snow' ? (<img src={snowPath} alt="snow" />) :
                                    day?.weather[0].main == 'Clouds' ? (<img src={cloudPath} alt="clouds" />) :
                                    (<p>unknown</p>)
                                }
                                </div>
                                <div className='card_item_txt'>
                                    <p>{day?.main.temp}°С</p>
                                    <p>{day?.weather[0].description}</p>
                                    <p>{day?.dt_txt}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                
        </div>
    );
}

export default MyCardDown;