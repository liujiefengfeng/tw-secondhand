import * as React from 'react';
import ButtonWithColor from './ButtonWithColor';
import { shallow } from 'enzyme';

describe('ButtonWithColor', () => {
  let buttonWithColor;
  beforeEach(() => {
    buttonWithColor = shallow(<ButtonWithColor buttonContent={'buttonText'} isGreyButton={true}/>);
  });
  it('ButtonWithColor should render with customize text', () => {
    expect(buttonWithColor.find('button').text()).toEqual('buttonText');
  });
  
  it('ButtonWithColor should render with grey color by props isGreyButton', () => {
    expect(buttonWithColor.find('button').props()).toHaveProperty('className', 'button-grey');
  });
});