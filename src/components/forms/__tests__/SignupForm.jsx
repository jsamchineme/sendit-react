import React from 'react';
import { shallow } from 'enzyme';
import { SignupForm } from '../SignupForm';
import configureStore from '../../../redux/configureStore';

const store = configureStore();

describe('Tests for signup form', () => {
  it('should render the signup form', () => {
    const props = {
      handleSubmit: jest.fn(), 
      serverErrorMessage: '',
    }
    const wrapper = shallow(<SignupForm  {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});