import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../src/components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ExperiencePage from './pages/experience/experience.component';



const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/experience' component={ExperiencePage} />
    </Switch>
  </div>
);

export default App;
