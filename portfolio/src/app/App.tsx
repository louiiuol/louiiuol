import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/views/home/Home';
import Header from './components/shared/Header';
import Presentation from './components/views/presentation/Presentation';
import WorksPlatform from './components/views/works/WorksPlatform';

const App = () => {

  return (
    <Router basename="/louiiuol">
      <main id="app">
        <Header />
        <section className="global-container flexed">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/presentation' component={Presentation}></Route>
            <Route path='/projets' component={WorksPlatform}></Route>
          </Switch>
        </section>
      </main>
    </Router>);

}; export default App;
