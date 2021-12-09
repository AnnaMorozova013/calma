import './App.css';
import {
  Routes, 
  Route
} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App(props) {

  return (
    <div className="App">
    <Navbar />
     <Routes>
     <Route path='/' element={ <Signup/> } />
     </Routes>
     </div>
  );
}

export default App;
