import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import App from "./App";
import Shop from "./Shop";
import Cart from "./Cart";
import Navbar from "./Navbar";




function RouteSwitch(){



    const[cart, setCart] = useState([{
        name: '',
        value: '',
    
    }])

    const[amount, setAmount] = useState(0);
    
    

    //console.log(cart)
    

    function addItem(e) {
       

        setCart([
            ...cart,
            {
                name: e.target.name,
                value: e.target.value,
            
            }
        ])
        setAmount(amount + 1)
            
}
    


    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/shop' element={<Shop add={addItem} />} />
                <Route path='/cart' element={<Cart bag={cart} /> } />
                <Route path='/navbar' element={<Navbar total={amount}  />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;


