
import React from "react";
import Navbar from "./Navbar";

function Cart(props){
    return(
        <div className="checkout">
        <Navbar />
            <div className="cart">
            
                {props.bag.map( cart => <h4>{cart.name} {cart.value} </h4>)}
            <button
            onClick={() => {
                alert('you have checked out, thank you for shopping with us !')
            }}
            >Check out.</button>
            </div>
        </div>
    )
}

export default Cart;