import * as React from 'react';
import { Product, Status } from './Product';
import {mount} from 'enzyme';

describe('Product', () => {
  const givenImage = 'https://assets.servedby-buysellads.com/p/manage/asset/id/28536';
  const givenPrice = '1234';

  it('should render close message when owner is empty & isClosed', () => {
    const wrapper = mount(<Product
      image={givenImage}
      price={givenPrice}
      isClosed={true}
    />);

    expect(wrapper.find(Status).text()).toEqual('交易关闭');
  });

  it('should render close message when owner is empty & isClosed equal false', () => {
    const wrapper = mount(<Product
      image={givenImage}
      price={givenPrice}
    />);

    expect(wrapper.find(Status).text()).toEqual('出售中');
  });
});
