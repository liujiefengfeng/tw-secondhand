import * as React from 'react';
import Input from '../Input/Input';
import Header from '../Header/Header';
import ButtonWithColor from '../ButtonWithColor/ButtonWithColor';
import './RegisterPopup.css';
const logo = require('./logo.png');

interface RegisterPopupProps {
  onSubmit: () => void;
  onIconClick: () => void;
}

export default (props: RegisterPopupProps) => (
  <div className="RegisterPopup">
    <Header closeIcon={true} headerContext="注册" onClick={props.onIconClick}/>
    <div className="content">
      <div className="image"><img className="logo" src={logo} alt="logo" /></div>
      <form className="form" onSubmit={props.onSubmit}>
        <Input className="item" placeholder="用户名" mask={false} />
        <Input className="item" placeholder="密码" mask={true} />
        <Input className="item" placeholder="确认密码" mask={true} />
        <ButtonWithColor type="submit" buttonContent="注册" />
      </form>
    </div>
  </div>
);
