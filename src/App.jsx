import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import CardWeather from './components/CardWeather';
import './App.css'
const API_KEY = '68240ba49be1eb5ee6072c1954cfecc9'

const App = function () {
    const [city, setCity] = useState('Kazan')
    const [weather, setWeather] = useState(null)
    async function fetchWeather() {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
            setWeather(response.data)
        }catch(e){
            console.log(e)
        }
    }
    
    return (  
        <div className="App">
            <CardWeather setCity={setCity} fetchWeather={fetchWeather} weather={weather}></CardWeather>
        </div>
    );
}

export default App;