import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from '../LoginPage';
import configureStore from '../../../redux/configureStore';

const store = configureStore();

describe('Tests for login page', () => {
  it('should render the login page', () => {
    const subject = (
      <Provider store={store}>
        <BrowserRouter>
          <Route render={() => <LoginPage />} />
        </BrowserRouter>
      </Provider>
    );
    const wrapper = mount(subject);
  
    // expect(wrapper.state('email')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });
});