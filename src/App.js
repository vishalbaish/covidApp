import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Country from './Country';
import Home from './Home';
import Historical from './Historical';


function App() { 
  
  return (
    // for changing pages
    <Router>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Historical" exact component={Historical} />
    <Route path="/:countryName" component={Country} />
  </Switch>

</Router>
  );
}


export default App;
