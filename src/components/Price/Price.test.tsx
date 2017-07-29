import * as React from 'react';
import Price from './Price';
import { shallow } from 'enzyme';

it('Price should render with customize price', () => {
  const price = shallow(<Price price={'3000.21'}/>);

  expect(price.text()).toEqual('¥ 3000.21');
});
