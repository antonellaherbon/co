import { useState } from "react";

function CardComponent (props){
    const [selectedButton, setSelectedButton] = useState('');


    const handleAllProductsClick = () => {
        if (props.stock == "si"){
            setSelectedButton('allProducts')
        }
    };

    const handleAvailableNowClick = () => {
        setSelectedButton('availableNow')
    };

    return(
        <section className="products_section">
            <h1 className='texto'>Our Collection</h1>
            <h2 className='texto2'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</h2>
            <div className="contBotones">
                <button className='boton' onClick={handleAllProductsClick}>All Products</button> 
                <button className='boton' onClick={handleAvailableNowClick}>Available Now</button>
            </div>
            <div className="products_container">
                {props.children}
            </div>
        </section>
    )
}

export default CardComponent;