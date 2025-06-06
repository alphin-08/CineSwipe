//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainScreen from './pages/mainPage';
import Login from './pages/loginP';
import CreateAccount from './pages/createAccount';
import Recommendations from './pages/recommendations';
import PreferencesMovies from './pages/preferencesMovies';
import PreferencesShows from './pages/preferencesShows';
import SuggestedMovies from './pages/suggestedMovies';
import SuggestedShows from './pages/suggestedShows';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainScreen/>} />
        <Route path="/loginP" element={<Login/>} />
        <Route path="/createAccount" element={<CreateAccount/>} />
        <Route path="/recommendations" element={<Recommendations/>} />
        <Route path="/preferencesMovies" element={<PreferencesMovies/>} />
        <Route path="/preferencesShows" element={<PreferencesShows/>} />
        <Route path="/suggestedMovies" element={<SuggestedMovies/>} />
        <Route path="/suggestedShows" element={<SuggestedShows/>} />
      </Routes>
    </Router>
  );
}

export default App;

