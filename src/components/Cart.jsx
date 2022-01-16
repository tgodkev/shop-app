import React from "react";
import Navbar from "./Navbar";

function Cart(props){
    return(
        <div>
        <Navbar />
            <div className="cart">
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <h3>{props.amount}</h3>
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