
import React from 'react';

function Card(props){
    return(
        <div>
        <div className='shop'>
        <div className='item'>
            <h1>{props.name}</h1>
            <img src={props.img} alt="" />
            <h2>{props.price}</h2>
           <button onClick={props.add}>
               add to cart
           </button>
            </div>
            </div>
        </div>
    )
}

export default Card;