import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import './Animation.css';
import Header from './components/header/Header';
import Hero from './components/main/Hero';
import Amounts from './components/main/Amounts';
import Adopt from './components/main/Adopt';
import AnimalDetail from './components/main/AnimalDetail';

function App() {
  return (
    <BrowserRouter> 
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Amounts />
              <Adopt />
            </>
          } />


          <Route path="/adopt/:id" element={<AnimalDetail />} /> 
          
          <Route path='/vogels/' element={
            <>
              <Adopt />
          </>} />
          <Route path='/katten/' element={
            <>
              <Adopt />
          </>} />
          <Route path='/honden/' element={
            <>
              <Adopt />
          </>} />

          <Route path='/adopt/' element={
            <>
              <Adopt />
          </>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
