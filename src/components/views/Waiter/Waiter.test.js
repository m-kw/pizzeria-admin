import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';
import OrderNew from './OrderNew';
import OrderID from './OrderID';

describe('Waiter component', () => {
  it('should render without crashing', () => {
    shallow(<Waiter />);
  });
});

describe('OrderNew and OrderID components', () => {
  it('should render without crashing', () => {
    shallow(<OrderNew />);
    shallow(<OrderID />);
  });
});
