import React from 'react';
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import MyCardUp from './UI/card/MyCardUp';
import MyCardDown from './UI/card/MyCardDown';
import './index.css'
const CardWeather = function () {
    return (  
        <Card className='card_all'>
            <CardHeader className='card_header'>
                <MyCardUp></MyCardUp>
            </CardHeader>
            <CardBody>
                <MyCardDown></MyCardDown>
            </CardBody>
        </Card>
    );
}

export default CardWeather;