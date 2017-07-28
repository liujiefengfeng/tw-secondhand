import * as React from 'react';
import ButtonWithColor from './ButtonWithColor';
import { shallow } from 'enzyme';

it('ButtonWithColor should render with customize text', () => {
    const buttonWithColor = shallow(<ButtonWithColor buttonContent={'buttonText'}/>);

    expect(buttonWithColor.find('button').text()).toEqual('buttonText');
});