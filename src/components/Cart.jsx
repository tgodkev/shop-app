import React from "react";
import Navbar from "./Navbar";

function Cart(props){
    return(
        <div >
            <Navbar />
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <h3>{props.amount}</h3>

        </div>
    )
}

export default Cart;