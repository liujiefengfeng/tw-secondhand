import * as React from 'react';
import { shallow } from 'enzyme';
import User from './User';

it('User should render with customize User', () => {
  const user = shallow(<User name="yangjie"/>);

  expect(user.find('span').text()).toEqual('yangjie');
  expect(user.find('img').length).toBe(1);
});
