import React from 'react'
import Header from  './components/Header'
import Home from  './components/Home'
import Products from  './components/Products'
import Cart from  './components/Cart'
import Legals from  './components/Legals'
import {  Route, Routes } from 'react-router-dom';

import './App.css'

function App() {
 
  return (
    <div className="App">
 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/legals" element={<Legals />} />
       
      </Routes>
    
  </div>
  )
}

export default App
