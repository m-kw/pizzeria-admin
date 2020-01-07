import React from 'react';
import PageNav from './PageNav';
import Button from '@material-ui/core/Button';
import { shallow } from 'enzyme';

describe('Component PageNav', () => {
  it('renders without crashing', () => {
    expect(shallow(<PageNav />)).toBeTruthy();
  });
  it('renders 5 Buttons', () => {
    const component = shallow(<PageNav />);
    expect(component.find(Button).length).toEqual(5);
  });
});
