import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/views/LandingPage';
import LoginPage from './components/views/LoginPage';
import SignupPage from './components/views/SignupPage';
import SignupWelcome from './components/views/SignupWelcome';
import NotFound from './components/views/NotFound';
import Logout from './components/views/Logout';
import Dashboard from './components/views/Dashboard';
import configureStore from './redux/configureStore';
import PrivateUserRoute from './components/views/PrivateUserRoute';
import PrivateAdminRoute from './components/views/PrivateAdminRoute';

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
          <PrivateUserRoute path='/dashboard' component={Dashboard} />
          <PrivateAdminRoute path='/admin-dashboard' component={Dashboard} />
          <Route path='/logout' component={Logout} />
          <Route render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
