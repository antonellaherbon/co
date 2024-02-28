import logo from './logo.svg';
import './App.css';
import Card from "./components/card";
import cafeImagen from "./imgs/cafe.jpg"
import CardComponent from './components/cardContainer';
import data from "./productos.json"

function App() {
  return (
    <div className="App">
      <header className='header'><img className='imagen' src={cafeImagen} alt="Cafe Header"/> </header>
      <div className='contenedorPrincipal'>
        <CardComponent>
          {data.map(product =>
              <Card 
              key = {product.name}
              name={product.name}
              image ={product.image}
              price={product.price}
              rating={product.rating}
              cantidadVotos ={product.cantidad}
              stock = {product.stock}
              />
              )}
        </CardComponent>
      </div>
    </div>
  );
}

export default App;
