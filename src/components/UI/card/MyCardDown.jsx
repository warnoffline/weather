import React from 'react';
import { useSelector } from 'react-redux';
import IconWeather from './IconWeather';
import './Card.css'
import {format, parse} from 'date-fns'
import { weatherDescriptions } from '../../../services/description.service';

const MyCardDown = function () {
    const {weathers} = useSelector((state) => state)
    return (  
        <div className='card_down'>
                <div className='card_items'>
                    {
                        weathers?.list?.slice(1,6).map((weather,index) => {
                            const parsedDate = parse(weather?.dt_txt, 'yyyy-MM-dd HH:mm:ss', new Date());
                            const formattedDate = format(parsedDate, 'dd/MM HH:mm');
                            const description = weatherDescriptions[weather?.weather[0].description] || `Другое`;
                            return (
                                <div key={index} className='card_item'>
                                    <div className='card_item_img'>
                                        <IconWeather weather={weather}/>
                                    </div>
                                    <div className='card_item_txt'>
                                        <p>{weather?.main.temp}°С</p>
                                        <p>{description}</p>
                                        <p>{formattedDate}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
        </div>
    );
}

export default MyCardDown;