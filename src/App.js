import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import './App.css';
import './Animation.css';
import Header from './components/header/Header';
import Hero from './components/main/Hero';
import Amounts from './components/main/Amounts';
import Adopt from './components/main/Adopt';

function App() {
  return (
    <BrowserRouter> 
    <header>
    <Header />
    </header>
    <main>
    <Hero />
    <Amounts />
    <Adopt />
    </main>
    </BrowserRouter>
  );
}

export default App;
