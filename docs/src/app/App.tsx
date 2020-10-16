import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/views/home/Home';
import Header from './components/shared/header/Header';
import Presentation from './components/views/presentation/Presentation';
import Works from './components/views/works/Works';

function App() {
  return (
    <Router>
      <section id="app">
        <Header />
        <section className="global-container">
          <Switch>
            <Route exact path='/louiiuol/' component={Home}></Route>
            <Route path='/louiiuol/presentation' component={Presentation}></Route>
            <Route path='/louiiuol/projets' component={Works}></Route>
          </Switch>
        </section>
      </section>
    </Router>);
}

export default App;
