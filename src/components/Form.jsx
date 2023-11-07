import React from 'react';
import './index.css'
import { Button, Input} from '@chakra-ui/react'

const Form = function ({fetchWeather, setCity}) {
    return (  
        <form className="form" onSubmit={(e) => { e.preventDefault(); fetchWeather(); }}>
            <Input variant='flushed' onChange={(e) => setCity(e.target.value)} placeholder='Введите город' />
            <Button type="submit" colorScheme='blue'>Посмотреть погоду</Button>
        </form>
    );
}

export default Form;