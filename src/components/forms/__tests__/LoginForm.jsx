import React from 'react';
import { shallow, mount } from 'enzyme';
import { LoginForm } from '../LoginForm';
import configureStore from '../../../redux/configureStore';

const store = configureStore();

describe('Tests for login form', () => {
  it('should render the login form', async () => {
    const props = {
      handleSubmit: jest.fn(), 
      serverErrorMessage: '',
    }
    const wrapper = shallow(<LoginForm  {...props} />);

    // await wrapper.find('input').at(0).simulate('change', {
    //   target: { value: 'asdasd' }
    // });

    // console.log(wrapper.props());

    // expect(wrapper.state());

    expect(wrapper).toMatchSnapshot();
  });
});