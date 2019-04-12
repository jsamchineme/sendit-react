import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import configureStore from '../../../redux/configureStore';

const store = configureStore();

describe('Tests for login form', () => {
  it('should render the login form', () => {
    const subject = (
      <Provider store={store}>
        <BrowserRouter>
          <Route render={() => <Dashboard />} />
        </BrowserRouter>
      </Provider>
    );
    const wrapper = mount(subject);
  
    // expect(wrapper.state('email')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });
});