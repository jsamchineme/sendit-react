import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/views/LandingPage';
import LoginPage from './components/views/LoginPage';
import SignupPage from './components/views/SignupPage';
import SignupWelcome from './components/views/SignupWelcome';
import Dashboard from './components/views/Dashboard';
import configureStore from './redux/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignupPage} />
          <Route path='/signup/welcome' component={SignupWelcome} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
