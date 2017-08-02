import * as React from 'react';
import { shallow } from 'enzyme';
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme());
const {expect} = chai;
import ProductDescribeBox from './ProductDescribeBox';

describe('ProductDescribeBox', () => {
  let productDescribeBox;

  beforeEach(() => {
    productDescribeBox = shallow(
      <ProductDescribeBox />);
  });

  it('should render the produce describe box with placeholder', () => {
    expect(productDescribeBox.find('.ProdcutDescribeBox')).to.have.prop('placeholder', '添加描述...');
  });
});
