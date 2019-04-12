import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import OrderCreateForm from '../OrderCreateForm';
import configureStore from '../../../redux/configureStore';

const store = configureStore();

describe('Tests for login form', () => {
  it('should render the login form', () => {
    const wrapper = shallow(<OrderCreateForm />);
  
    // expect(wrapper.state('email')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });
});