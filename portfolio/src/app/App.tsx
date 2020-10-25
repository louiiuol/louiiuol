import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/views/home/Home';
import Header from './components/shared/Header';
import Presentation from './components/views/presentation/Presentation';
import Works from './components/views/works/Works';

const App = () => {

  return (
    <Router basename="/louiiuol">
      <section id="app">
        <Header />
        <section className="global-container flexed">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/presentation' component={Presentation}></Route>
            <Route path='/projets' component={Works}></Route>
          </Switch>
        </section>
      </section>
    </Router>);

}; export default App;
