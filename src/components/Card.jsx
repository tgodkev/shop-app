import { dividerClasses } from '@mui/material';
import React from 'react';

function Card(props){
    return(
        <div>
        <div className='shop'>
        <div className='item'>
            <h1>{props.name}</h1>
            <img src={props.img} alt="" />
            <h2>{props.price}</h2>
            <h4> {props.description} </h4>
            </div>
            </div>
        </div>
    )
}

export default Card;