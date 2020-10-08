import React from 'react';
import Home from './components/views/home/Home';
import Header from './components/shared/header/Header';
import Parcours from './components/views/parcours/Parcours';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div id="app">
        <Header />
        <section className="global-container">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/parcours' component={Parcours}></Route>
          </Switch>
        </section>
      </div>
    </Router>);
}

export default App;
