import React from 'react';
import { shallow } from 'enzyme';
import Tables from './Tables';
import BookingID from './BookingID';
import BookingNew from './BookingNew';
import EventsID from './EventsID';

const mockProps = {
  match: {
    params: {
      id: 'param1',
    },
  },
};

describe('Tables component', () => {
  it('should render without crashing', () => {
    shallow(<Tables />);
  });
});

describe('BookingID and Booking New components', () => {
  it('should render without crashing', () => {
    shallow(<BookingID {...mockProps} />);
    shallow(<BookingNew />);
  });
});

describe('BookingID component', () => {
  it('should render correct ID', () => {
    const component = shallow(<BookingID {...mockProps}/>);
    const renderedID = component.find('.id').text();
    expect(renderedID).toEqual(`BookingNo. ${mockProps.match.params.id} details`);
  });
});

describe('EventsID component', () => {
  it('should render proper ID', () => {
    const component = shallow(<EventsID {...mockProps}/>);
    const renderedID = component.find('.id').text();
    expect(renderedID).toEqual(mockProps.match.params.id);
  });
});
