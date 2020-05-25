import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../src/components/header/header.component';

import HomePage from './pages/homepage/homepage.component';



const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
  </div>
);

export default App;
