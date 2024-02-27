import './Home.modules.scss'; 
import banner from '../assets/banner.png';

const Home = () => {
  return (
    <div className='Home'>
      <header className='header'>
         <img className='banner' src={banner} alt='Banner' />
        <h1>Bienvenidos a Mercado Verde</h1>
        <p>Tienda online de plantas, macetas y accesorios</p>
      </header>
      <footer className='footer'>
        <p>&copy; 2024 Mercado Verde</p>
      </footer>
    </div>
  );
};

export default Home;
