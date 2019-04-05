import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../LoginForm';
import configureStore from '../../../redux/configureStore';

const store = configureStore();

describe('Tests for login form', () => {
  it('should render the login form', () => {
    const wrapper = shallow(<LoginForm />);
  
    // expect(wrapper.state('email')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });
});