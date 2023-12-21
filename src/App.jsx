//import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {

  return (
    <>
  <NavBar/>
  <ItemListContainer greeting={"Bienvenidos"}/>
      </> 
  )
}

export default App;
