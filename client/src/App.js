import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import React, { useState } from 'react';
import Signup from './components/Signup';
import Welcome from './pages/Welcome';
import Mood from './pages/Mood';
import Survey from './pages/Survey'
import Journal from './pages/Journal'
import Summary from './pages/Summary'

function App(props) {

  const [user, setUser] = useState(props.user)

  const addUser = user => {
    setUser(user)
  }

  console.log('App.js:', user)

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={< Signup />}
          render={props => <Signup setUser={addUser} {...props} />} />

        <Route
          path='/welcome' element={< Welcome />} />

        <Route
          path='/mood' element={< Mood />} />

        <Route
          path='/survey' element={< Survey />} />

        <Route
          path='/journal' element={< Journal />} />

        <Route
          path='/summary' element={< Summary setUser={addUser} />} />

      </Routes>
    </div>
  );
}

export default App;
