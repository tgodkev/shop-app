import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import products from "./Products";


function createCard(products){
    return(
        <Card 
            id={products.id}
            key={products.id}
            name={products.name}
            description={products.description}
            img={products.img}
            price={products.price}
        />
    )
}

function Shop(){
    return(
        <div>
        <Navbar />
            {products.map(createCard)}
          
         </div>
    )
}

export default Shop;