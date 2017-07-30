import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import User from "../User/User";
import { Product, Status } from './Product';

describe('Product', () => {
  const givenImage = 'https://assets.servedby-buysellads.com/p/manage/asset/id/28536';
  const givenPrice = '1234';

  it('should render close message when owner is empty & isClosed', () => {
    const wrapper = mount(<Product
      image={givenImage}
      price={givenPrice}
      isClosed={true}
    />);

    expect(wrapper.find(Status).text()).to.equal('交易关闭');
    expect(wrapper.hasClass("grey")).to.equal(true);
  });

  it('should render close message when owner is empty & isClosed equal false', () => {
    const wrapper = mount(<Product
      image={givenImage}
      price={givenPrice}
    />);

    expect(wrapper.find(Status).text()).to.equal('出售中');
    expect(wrapper.hasClass("grey")).to.equal(false);
  });

  it('should render user instead of close message when owner is exist', () => {
    const givenOwner = 'Yangjie';

    const wrapper = mount(<Product
      image={givenImage}
      price={givenPrice}
      owner={givenOwner}
    />);

    expect(wrapper.find(User).text()).to.equal(givenOwner);
    expect(wrapper.find(Status)).to.have.length(0);
  });
});
