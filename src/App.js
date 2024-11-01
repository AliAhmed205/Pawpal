import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import './App.css';
import './Animation.css';
import Header from './components/header/Header';
import Hero from './components/main/Hero';
import Amounts from './components/main/Amounts';

function App() {
  return (
    <BrowserRouter> 
    <Header />
    <Hero />
    <Amounts />
    </BrowserRouter>
  );
}

export default App;
