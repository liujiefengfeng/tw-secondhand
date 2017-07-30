import * as React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('should render the text without icon', () => {
  const header = shallow(<Header headerContext={'login please'}/>);

  expect(header.text()).toContain('login please');
  expect(header.find('img').length).toBe(0);
});

it('should render the text with close icon', () => {
  const header = shallow(<Header closeIcon={true} headerContext={'please'} />);

  expect(header.find('img').length).toBe(1);
});

it('should render the text with close icon', () => {
  const header = shallow(<Header goBackIcon={true} headerContext={'please'} />);

  expect(header.find('img').length).toBe(1);
});
