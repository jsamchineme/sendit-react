import React from 'react';
import { shallow } from 'enzyme';
import { DestinationEditContainer } from '../DestinationEditForm';
import configureStore from '../../../redux/configureStore';

const store = configureStore();

describe('Tests for destination edit form', () => {
  it('should render the destination edit form', () => {
    const props = {
      handleSubmit: jest.fn(), 
      serverErrorMessage: '',
    }
    const wrapper = shallow(<DestinationEditContainer  {...props} />);
  
    expect(wrapper).toMatchSnapshot();
  });
});