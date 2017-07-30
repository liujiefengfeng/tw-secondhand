import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import ProductDetail from './ProdcutDetail';

describe('ProductDetail', () => {
  let productDetail;

  beforeEach(() => {
    productDetail = mount(
      <ProductDetail
        img={'./detail.png'}
        user={'Yangjie'}
        title={'Baby carriage'}
        price={'1998'}
        details={'产品型号: 520D&nbsp;weight: 15kg'}
      />);
  });

  it('should render the product image', () => {
    expect(productDetail.find('.product-img').length).to.equal(1);
  });

  it('should render the product title', () => {
    expect(productDetail.find('.product-title').text()).to.equal('Baby carriage');
  });

  it('should render the price', () => {
    expect(productDetail.find('.Price').text()).to.equal('¥ 1998');
  });

  it('should render the user', () => {
    expect(productDetail.find('.User').text()).to.equal('Yangjie');
  });

  it('should render the details', () => {
    expect(productDetail.find('.product-details').text()).to.equal('产品型号: 520D&nbsp;weight: 15kg');
  });

  it('should render the buy button', () => {
    expect(productDetail.find('button').text()).to.equal('立即购买');
  });
});
