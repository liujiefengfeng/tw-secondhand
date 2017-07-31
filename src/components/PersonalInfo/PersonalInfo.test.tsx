import * as React from 'react';
import { shallow } from 'enzyme';
import PersonalInfo from './PersonalInfo';

it('should render the person info with default avatar', () => {
  const personInfo = shallow(<PersonalInfo personName="Yan" />);

  expect(personInfo.find('.person-info__name').text()).toBe('Yan');
  expect(personInfo.find('.person-info__avatar img').props().src)
    .toContain('defaultAvatar');
});

it('should render the person info with custom avatar', () => {
  const personInfo = shallow(
    <PersonalInfo personName="Yan" personAvatar="http://7xpyct.com1.z0.glb.clouddn.com/cdjh_1471794111999_1249.png" />
  );

  expect(personInfo.find('.person-info__name').text()).toBe('Yan');
  expect(personInfo.find('.person-info__avatar img').props().src)
    .toBe('http://7xpyct.com1.z0.glb.clouddn.com/cdjh_1471794111999_1249.png');
});
