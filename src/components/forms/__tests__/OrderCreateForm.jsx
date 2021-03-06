import React from 'react';
import { shallow } from 'enzyme';
import { OrderCreateForm } from '../OrderCreateForm';
import configureStore from '../../../redux/configureStore';

const store = configureStore();

describe('Tests for login form', () => {
  it('should render the login form', () => {
    const props = {
      handleSubmit: jest.fn(), 
      serverErrorMessage: '',
    }
    const wrapper = shallow(<OrderCreateForm  {...props} />);
  
    expect(wrapper).toMatchSnapshot();
  });
});