import * as React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import FooterMeum from './FooterMenu';

it('Footer should render three menus and none of them be actived ', () => {
  const footer = shallow(<Footer/>);

  expect(footer.find('.footer a').length).toBe(3);
  expect(footer.find('.footer a').at(0).props().className).toBe('');
  expect(footer.find('.footer a').at(2).props().className).toBe('');
});

it('Home menu should be active', () => {
  const footer = shallow(<Footer activeMenu={FooterMeum.Home}/>);

  expect(footer.find('.footer a').at(0).props().className).toBe('active');
  expect(footer.find('.footer a').at(2).props().className).toBe('');
});

it('Person menu should be active', () => {
  const footer = shallow(<Footer activeMenu={FooterMeum.Person}/>);

  expect(footer.find('.footer a').at(0).props().className).toBe('');
  expect(footer.find('.footer a').at(2).props().className).toBe('active');
});
