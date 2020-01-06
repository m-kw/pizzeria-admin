import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';

describe('Waiter component', () => {
  it('should render without crashing', () => {
    shallow(<Waiter />);
  });
});
