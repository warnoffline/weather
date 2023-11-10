import {createStore} from 'redux'

const initialState = {
    city: 'Kazan',
    weather: null,
    weathers: null,
};

export const store = createStore((state = initialState, action) => {
    switch (action.type){
        case 'SET_CITY': 
            return {...state, city: action.payload};
        case 'SET_WEATHER':
            return {...state, weather: action.payload};
        case 'SET_WEATHERS':
            return {...state, weathers: action.payload};
        default: 
            return state;
    }
})

export const setCity = (city) => {
    return {
      type: 'SET_CITY',
      payload: city
    };
  };
  
export const setWeather = (weather) => {
return {
    type: 'SET_WEATHER',
    payload: weather
};
};
  
export const setWeathers = (weathers) => {
return {
    type: 'SET_WEATHERS',
    payload: weathers
};
};
