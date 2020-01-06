import React from 'react';
import { shallow } from 'enzyme';
import Kitchen from './Kitchen';

describe('Kitchen component', () => {
  it('should render without crashing', () => {
    shallow(<Kitchen />);
  });
});
