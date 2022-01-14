import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import products from "./Products";
import Okj from "./images/okjbronco.png"
import longhorn from "./images/longhorn.png"
import wichita from './images/wichita.jpg'
import weber from './images/weber.jpeg'




 function Shop(props){



    return(
        <div>
        <Navbar />
            <div>
                <div>
                    <h1>Oklahoma Joes Bronco Drum Smoker'</h1>
                    <img src={Okj} alt="" />
                        <h2>$499</h2>
                        <button
                        name={'bronco drum smoker'}
                        value={'$499'}
                        onClick={props.add}
                        >add to cart.</button>
                </div>
                <div>
                    <h1>Longhorn Reverse Flow offset</h1>
                    <img src={longhorn} alt="" />
                        <h2>$799</h2>
                </div>
                <div>
                    <h1>Loaded Wichita</h1>
                    <img src={wichita} alt="" />
                        <h2>$2,729</h2>
                </div>
                <div>
                    <h1>lang 36" smoker series'</h1>
                    <img src="" alt="" />
                        <h2>$499</h2>
                </div>
                <div>
                    <h1>Smokey Mountain 22inch.</h1>
                    <img src={weber} alt="" />
                        <h2>$499</h2>
                </div>
            
            
            
            
            </div>
         </div>
         
    )
}

export default Shop;

{/*function createCard(products){

        

    return(
        <Card 
            id={products.id}
            key={products.id}
            name={products.name}
            description={products.description}
            img={products.img}
            price={products.price}
            link={products.link}
        />
    )
}*/}