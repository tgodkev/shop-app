import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import App from "./App";
import Shop from "./Shop";
import Cart from "./Cart";

function RouteSwitch(){

    const[item, setItem] = useState('')
    
    function addItem() {
        setItem('item clicked');
        console.log(item);
    }


    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/shop' element={<Shop add={addItem} />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;