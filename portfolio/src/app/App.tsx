import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Presentation, Works } from './components/views';
import {Header} from './components/shared';

export const App = () =>
  (<Router basename="/louiiuol">
      <main id="app">
        <Header />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/presentation' component={Presentation}></Route>
            <Route path='/projets' component={Works}></Route>
          </Switch>
      </main>
    </Router>);
