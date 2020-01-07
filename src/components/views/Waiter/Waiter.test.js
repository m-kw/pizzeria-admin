import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';
import OrderNew from './OrderNew';
import OrderID from './OrderID';

const mockProps = {
  match: {
    params: {
      id: 'param1',
    },
  },
};

describe('Waiter component', () => {
  it('should render without crashing', () => {
    shallow(<Waiter />);
  });
});

describe('OrderNew and OrderID components', () => {
  it('should render without crashing', () => {
    shallow(<OrderNew />);
    shallow(<OrderID {...mockProps}/>);
  });
});

describe('OrderID component', () => {
  it('should render proper ID', () => {
    const component = shallow(<OrderID {...mockProps}/>);
    const renderedID = component.find('.id').text();
    expect(renderedID).toEqual(mockProps.match.params.id);
  });
});
