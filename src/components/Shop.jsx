import React from "react";
import Navbar from "./Navbar";
import Okj from "./images/okjbronco.png"
import longhorn from "./images/longhorn.png"
import wichita from './images/wichita.jpg'
import weber from './images/weber.jpeg'
import lang from './images/lang.jpg'



 function Shop(props){



    return(
        <div>
        <Navbar />
            <div className="container">
                <div className="one">
                    <h1>Oklahoma Joes Bronco Drum Smoker'</h1>
                    <img src={Okj} alt="" />
                        <h2>$499</h2>
                        <h3>The Oklahoma Joes® Bronco Drum Smoker has a unique airflow control system and sealed lid that deliver precise control over smoke and heat.</h3>
                        <button
                        name={'bronco drum smoker'}
                        value={"$499"}
                        onClick={props.add}
                        img={'./images/okj.png'}
                        >add to cart.</button>
                        
                </div>

                <div className="two">
                    <h1>Longhorn Reverse Flow offset</h1>
                    <img src={longhorn} alt="" />
                        <h2>$799</h2>
                        <h3>Built with versatility in mind, optional smokestack locations and removable baffles let you choose between reverse flow smoking for additional even heat and smoke, or traditional offset smoking.</h3>
                        <button
                        name={'Longhorn Reverse Flow.'}
                        value={"$799"}
                        onClick={props.add}
                        >add to cart.</button>
                </div>
                <div className="three">
                    <h1>Loaded Wichita</h1>
                    <img src={wichita} alt="" />
                        <h2>$2,729</h2>
                        <h3>Handcrafted with precision, the Wichitas dual-damper draft control system helps manage that perfect balance of heat and thin blue smoke, making a quick pitmaster out of backyard cooks and taking seasoned pitmasters to the next level.</h3>
                        <button
                        name={'Loaded Wichita'}
                        value={"$2,729"}
                        onClick={props.add}
                        >add to cart.</button>
                </div>
                <div className="four">
                    <h1>lang 36" smoker series'</h1>
                    <img src={lang} alt="" />
                        <h2>$499</h2>
                        <h3>The 36" smoker cooker has 6 cubic feet of cooking space and hold approximately 60-72 pounds of food with room to spare.</h3>
                        <button
                        name={'Lang 36"'}
                        value={"$2,195"}
                        onClick={props.add}
                        >add to cart.</button>
                </div>
                <div className="five">
                    <h1>Smokey Mountain 22inch.</h1>
                    <img src={weber} alt="" />
                        <h2>$499</h2>
                        <h3> The Weber Smokey Mountain Cooker features two 21-1/2 inch diameter steel-plated cooking grates for a whopping 726 square inches of cooking area. </h3>
                        <button
                        name='Smokey Mountain 22'
                        value= '$499'
                        onClick={props.add}
                        >add to cart.</button>
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