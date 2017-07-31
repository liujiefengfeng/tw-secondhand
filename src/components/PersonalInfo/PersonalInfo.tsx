import * as React from 'react';
import './PersonalInfo.css';

const defaultAvatar = require('./defaultAvatar.png');

interface PersonalInfoProps {
  personName: string;
  personAvatar?: string;
}

export default (props: PersonalInfoProps) => (
  <div className={'personal-info'}>
    <div className={'person-info__avatar'}>
      {renderPersonAvatar(props.personAvatar)}
    </div>
    <div className={'person-info__name'}>
      {props.personName}
    </div>
  </div>
);

const renderPersonAvatar = (personAvatar: string) => {
  if (!!personAvatar) {
    return (<img src={personAvatar} />);
  } else {
    return (<img src={defaultAvatar} />);
  }
};