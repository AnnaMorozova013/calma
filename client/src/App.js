import './App.css';
import {
  Routes, 
  Route
} from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Welcome from './pages/Welcome';

function App(props) {

const [user, setUser] = useState(props.user)

const addUser = user => {
  setUser(user);
}


console.log('App.js:', user)

  return (
    <div className="App">
    <Navbar />
     <Routes>
     <Route 
     path='/' 
     element={< Signup />}
     render={props => <Signup setUser={addUser} {...props} />} />
     <Route 
     path='/welcome' 
     element={< Welcome />} />
     </Routes>
     </div>
  );
}

export default App;
