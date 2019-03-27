import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/views/LandingPage';
import LoginPage from './components/views/LoginPage';
import SignupPage from './components/views/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
