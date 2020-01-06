import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';

describe('Homepage component', () => {
  it('should render without crashing', () => {
    shallow(<Homepage />);
  });
});
