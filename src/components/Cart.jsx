
import React from "react";
import Navbar from "./Navbar";

function Cart(props){
    return(
        <div>
        <Navbar />
            <div className="cart">
            
                {props.bag.map( cart => <li>{cart.name} {cart.value}</li>)}
            <button
            onClick={() => {
                alert('you have checked out.')
            }}
            >Check out.</button>
            </div>
        </div>
    )
}

export default Cart;

// <h1>{props.name}: ${props.price}</h1>