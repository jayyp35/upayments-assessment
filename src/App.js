import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './routes/Home';
import './App.css';
import Header from './components/Header';
import AddProduct from './routes/AddProduct';
import Product from './routes/Product';

function App() {
  return (
    <div className="App p-10 bg-gray-300 min-h-screen flex flex-col items-center">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/add" element={<AddProduct/>}/>
        <Route exact path="/product/:productId" element={<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
