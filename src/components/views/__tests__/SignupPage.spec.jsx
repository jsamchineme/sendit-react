import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { SignupPage } from '../SignupPage';
import configureStore from '../../../redux/configureStore';

const store = configureStore();

describe('Tests for signup page', () => {
  it('should render the signup page', () => {
    const props = {
      form: {
        loginForm: {
          registeredFields: {
            email: {
              name: 'email',
              type: 'Field',
              count: 1
            },
            password: {
              name: 'password',
              type: 'Field',
              count: 1
            }
          },
          fields: {
            email: {
              visited: true,
              touched: true
            },
            password: {
              visited: true,
              touched: true
            }
          },
          values: {
            email: 'gasg@g.com',
            password: 'secreatpass'
          },
          anyTouched: true
        }
      },
    }
    const subject = (
      <SignupPage {...props} />
    );

    const wrapper = shallow(subject);

    expect(wrapper).toMatchSnapshot();
  });
});