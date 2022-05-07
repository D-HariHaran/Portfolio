import './App.css';
import React from 'react';
import {Router, Switch,Route} from 'wouter';
import NavBar from './components/NavBar';
import Photography from './pages/Photography';
import Cinematography from './pages/Cinematography';
import Home from './pages/Home';
import ScroolButtonTop from './components/ScrollButtonTop';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/photography" exact component={Photography}/>
          {/* <Route path="/cinematography" exact component={Cinematography}/> */}
        </Switch>
        <ScroolButtonTop/>
        <ScrollToTop/>
    </Router>

       

  );
}

export default App;
