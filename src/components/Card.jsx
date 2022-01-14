
import React from 'react';

function Card(products, props){
    return(
        <div>
        <div className='shop'>
        <div className='item'>
            <h1>{products.name}</h1>
            <img src={products.img} alt="" />
            <h2>{products.price}</h2>
           <button onClick={props.handle}>
               add to cart
           </button>
            </div>
            </div>
        </div>
    )
}

export default Card;