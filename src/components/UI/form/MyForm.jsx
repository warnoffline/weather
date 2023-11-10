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
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSubmit();
        }
      };
    const handleSubmit = () => {
        dispatch(setCity(state));
    }
    return (  
        <form onSubmit={e => e.preventDefault()} className={cl.myForm}>
            <Input className={cl.myInput} onChange={handleInputChange} onKeyPress={handleKeyPress} variant='filled' placeholder='Введите город' />
            <Button className={cl.myButton} onClick={handleSubmit} colorScheme='blue'>Погода</Button>
        </form>
    );
}

export default MyForm;