import React from 'react';
import { shallow } from 'enzyme';
import Tables from './Tables';

describe('Tables component', () => {
  it('should render without crashing', () => {
    shallow(<Tables />);
  });
});
