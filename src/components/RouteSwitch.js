import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import App from "./App";
import Shop from "./Shop";
import Cart from "./Cart";
import Navbar from "./Navbar";




function RouteSwitch(){

    const[itemPrice, setItemPrice] = useState('');
    const[itemName, setItemName] = useState('');
    const[quantity, setQuantity] = useState(0);
    

    function addItem(e) {


        setQuantity(quantity + 1);
        setItemName(e.target.name)
        setItemPrice(e.target.value)

    console.log(itemPrice);
    console.log(itemName)
    console.log(quantity)
}
    


    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/shop' element={<Shop add={addItem} />} />
                <Route path='/cart' element={<Cart price={itemPrice} name={itemName} amount={quantity}  /> } />
                <Route path='/navbar' element={<Navbar amount={quantity} />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;