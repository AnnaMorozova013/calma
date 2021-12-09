import './App.css';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App(props) {

  const[user, setUser] = useState()

  return (
    <div className="App">
   <Router>
    <Navbar />
    <Signup />
     <Routes>
     <Route exact path='/signup' component={ Signup } />
     </Routes>
     </Router>
     </div>
  );
}

export default App;
