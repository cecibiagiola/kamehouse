import React from 'react';
import './App.css';
import {Testimony} from './Testimony';


function App() {
  return (
    <div className='app'>
      <div className='main-container'>
        <h1 className='title'>Opiniones de la gente</h1>
        <Testimony />       
      </div>
    </div>
  );
}

export default App;
