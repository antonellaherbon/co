import { useState } from "react";
import data from "../productos.json"


function CardComponent(props){


    return(
        <section className="products_section">
            <h1 className='texto'>Our Collection</h1>
            <h2 className='texto2'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</h2>
            <div className="contBotones">
                <button className='boton' onClick={() => props.filtrarHayStock(false)}>All Products</button>
                <button className='boton' onClick={() => props.filtrarHayStock(true)}>Available Now</button>
            </div>
            <div className="products_container">
                {props.children}
            </div>
        </section>
    )
}

export default CardComponent;