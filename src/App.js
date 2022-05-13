import React from 'react'
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import Rutas from './routes/Rutas';


function App() {
  return (
    <div className="App">

        <Rutas />

    </div>
  );
}

export default App;