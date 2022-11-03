import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';


import Navbar from './components/Navbar';
import Cards from './components/Cards';
import History from './components/History';
import Reservation from './components/Reservation';
import Hamburgermenu from './components/Hamburgermenu';
import Menu from './components/Menu';
import Profil from './components/Profil';
import Galery from './components/Galery';
import Footer from './components/Footer';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

    
    <Navbar/>
    <Cards/>
    <History/>
    <Reservation/>
    <Hamburgermenu/>
    <Menu/>
    <Profil/>
    <Galery/>
    <Footer/>
    </>
  );
}

export default App;
