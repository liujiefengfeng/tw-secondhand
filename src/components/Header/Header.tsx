import * as React from 'react';
import './Header.css';

const close = require('./close.png');
const arrow = require('./arrow.png');

interface HeaderProps {
  closeIcon?: boolean;
  goBackIcon?: boolean;
  headerContext: string;
}

export default (props: HeaderProps) => (
  <div className={'header'}>
    <div>
      {renderIcon(props.closeIcon, props.goBackIcon)}
    </div>
    <div>{props.headerContext}</div>
  </div>
);

const renderIcon = (closeIcon: boolean, goBackIcon: boolean) => {
  if (closeIcon) {return <img src={close} alt="close icon"/>; }
  if (goBackIcon) {return <img src={arrow} alt="go back icon"/>; }
  return null;
};