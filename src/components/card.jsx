import Rating from "../components/rating"

function Card (props){
    return(
        <div class="product">
	        <article class="card">
                <figure class="card-image">
                    <img style={{ width: '100%', height: '200px' }} src={props.image} alt="Imagen" />
                </figure>
                <div class="card-header">
                    <a href="#" className="textoCard">{props.name}</a>
                    <h2>${props.price}</h2>
                </div>
                <div class="card-footer">
                    <div class="card-meta card-meta--views">
                        {/* <h2>{props.rating}</h2> */}
                        <Rating/> 
                    </div>
                    <p>({props.cantidadVotos} Votos)</p>
                </div>
            </article>
        </div>
    )
}

export default Card;