const React = require('react');
const { mount } = require('enzyme');
const sinon = require('sinon').sandbox.create();
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme());
const {expect} = chai;
import ProductDetailsPopup from './ProductDetailsPopup';

describe('ProductDetailsPopup', () => {
  let stubOnIconClick;
  let stubOnBuyClick;
  let details;
  let productDetailsPopup;

  beforeEach(() => {
    stubOnIconClick = sinon.stub();
    stubOnBuyClick = sinon.stub();
    details = {
      img: '',
      title: '婴儿车',
      price: '1988',
      user: 'Lu',
      details: '',
      onClick: stubOnBuyClick
    };
    productDetailsPopup = mount(<ProductDetailsPopup onIconClick={stubOnIconClick} details={details} />);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should render header with title', () => {
     expect(productDetailsPopup.find('.title').text()).to.equal('商品详情');
  });

  it('should call onIconClock method when click close button', () => {
     productDetailsPopup.find('.icon').simulate('click');
     expect(stubOnIconClick.called).to.be.true;
  });

  it('should render submit button', () => {
    expect(productDetailsPopup.find('.button-with-color').text()).to.equal('立即购买');
  });

  it('should call onBuyClick method when click buy button', () => {
    productDetailsPopup.find('.button-with-color').find('button').simulate('click');
    expect(stubOnBuyClick.called).to.be.true;
  });
});
