import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../LoginPage';

describe('Login Page', () => {
  it('should render correctly', () => {
    const component = shallow(<LoginPage />);

    expect(component).toMatchSnapshot();
  });
});