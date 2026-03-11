import React, { useEffect, useState } from 'react';
import './App.css'
import weatherService from './services/weather.service';
import weathersService from './services/weathers.service';
import Header from './components/Header';
import CardWeather from './components/CardWeather';
import {setWeather, setWeathers} from './store/index'
import { useSelector, useDispatch } from 'react-redux';

const App = function () {
    const city = useSelector((state) => state.city);
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function fetchWeather(){
            const oneWeather = await weatherService(city);
            dispatch(setWeather(oneWeather))
            const moreWeather = await weathersService(city);
            dispatch(setWeathers(moreWeather))
        }
        fetchWeather()
    }, [city])
    return (  
        <div className="App">
            <Header/>
            <main className='main'>
                <CardWeather className='CardWeather' />
            </main>
        </div>
    );
}

export default App;