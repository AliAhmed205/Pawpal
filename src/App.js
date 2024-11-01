import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import './App.css';
import Header from './components/header/Header';
import Hero from './components/main/Hero';

function App() {
  return (
    <BrowserRouter> 
    <Header />
    <Hero />
    </BrowserRouter>
  );
}

export default App;
