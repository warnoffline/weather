import {React, useState} from 'react';
import { Input, Button } from '@chakra-ui/react'
import cl from './MyForm.module.css'
import { setCity} from '../../../store';
import { useDispatch } from 'react-redux';
const MyForm = function () {
    const dispatch = useDispatch();
    const [state, setState] = useState('')
    const handleInputChange = (event) => {
        const city = event.target.value;
        setState(city)
    };
    const handleSubmit = (e) => {
        const cityArray = state.split(' ').filter(x => x)
        const cityString = cityArray.join(' ')
        dispatch(setCity(cityString));
        e.preventDefault();
    }
    return (  
        <form onSubmit={e => (handleSubmit(e))} className={cl.myForm}>
            <Input className={cl.myInput} onChange={e => handleInputChange(e)} variant='filled' placeholder='Введите город' />
            <Button className={cl.myButton} onClick={handleSubmit}colorScheme='blue'>Погода</Button>
        </form>
    );
}

export default MyForm;