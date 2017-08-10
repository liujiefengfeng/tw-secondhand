import * as React from 'react';
import Input from '../Input/Input';
import Header from '../Header/Header';
import ButtonWithColor from '../ButtonWithColor/ButtonWithColor';
import './RegisterPopup.css';
import * as classNames from 'classnames';

const logo = require('./logo.png');

interface RegisterPopupProps {
  onSubmit: (username: string, password: string) => void;
  onIconClick: () => void;
  isActive: boolean;
}

interface RegisterPopupStates {
  username?: string;
  password?: string;
}

export default class RegisterPopup extends React.Component<RegisterPopupProps, RegisterPopupStates> {
  constructor(props: RegisterPopupProps) {
    super(props);
    this.state = {};
  }

  onSubmit() {
    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className={classNames('RegisterPopup', {HiddenRegisterPopup: !this.props.isActive})}>
        <Header closeIcon={true} headerContext="注册" onClick={this.props.onIconClick}/>
        <div className="content">
          <div className="image"><img className="logo" src={logo} alt="logo"/></div>
          <form className="form" onSubmit={this.onSubmit.bind(this)}>
            <Input className="item" placeholder="用户名" mask={false} onChange={e => this.setState({username: e.target.value})}/>
            <Input className="item" placeholder="密码" mask={true} onChange={e => this.setState({password: e.target.value})}/>
            <Input className="item" placeholder="确认密码" mask={true}/>
            <ButtonWithColor type="submit" buttonContent="注册"/>
          </form>
        </div>
      </div>);
  }
}
