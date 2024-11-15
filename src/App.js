//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route path="/login" component={Login} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/recommendations" component={Recommendations} />
        <Route path="/preferences/movies" component={PreferencesMovies} />
        <Route path="/preferences/shows" component={PreferencesShows} />
        <Route path="/suggested/movies" component={SuggestedMovies} />
        <Route path="/suggested/shows" component={SuggestedShows} />
      </Switch>
    </Router>
  );
}

export default App;

