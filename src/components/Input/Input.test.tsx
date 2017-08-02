import * as React from 'react';
const {shallow} = require('enzyme');
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme());
const { expect } = chai;
import Input from './Input';

describe('Input', () => {

  it('should have attribute type be password when mask is true', () => {
    const input = shallow(<Input mask={true} />);
    expect(input.find('input')).to.have.prop('type', 'password');
  });

  it('should have attribute type be text when mask is false and type is text', () => {
    const input = shallow(<Input mask={false} type={'text'}/>);
    expect(input.find('input')).to.have.prop('type', 'text');
  });
});
