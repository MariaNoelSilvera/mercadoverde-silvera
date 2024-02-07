import { importProducts } from '../firebase/importProducts';
import './Home.modules.scss'; 

const Home = () => {
  return (
    <div className='Home'>
      <header className='header'>
        <h1>Bienvenidos a Mercado Verde</h1>
        <p>Tienda online de plantas y macetas</p>
        <button onClick={importProducts}>Import Products</button>
      </header>
      <footer className='footer'>
        <p>&copy; 2024 Mercado Verde</p>
      </footer>
    </div>
  );
};

export default Home;
