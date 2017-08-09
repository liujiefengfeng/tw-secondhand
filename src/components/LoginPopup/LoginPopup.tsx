import * as React from 'react';
import Input from '../Input/Input';
import Header from '../Header/Header';
import ButtonWithColor from '../ButtonWithColor/ButtonWithColor';
import '../RegisterPopup/RegisterPopup.css';
import './LoginPopup.css';
const logo = require('../RegisterPopup/logo.png');
import * as classNames from 'classnames';

interface LoginPopupProps {
  onSubmit: (username: string, password: string) => void;
  goToRegister: () => void;
  onIconClick: () => void;
  isActive: boolean;
}

interface LoginPopupStates {
  username?: string;
  password?: string;
}
export class LoginPopup extends React.Component<LoginPopupProps, LoginPopupStates> {

  constructor(props: LoginPopupProps) {
    super(props);
    this.state = {};
  }

  onSubmit= ( {username, password}) => {
    this.props.onSubmit(username, password);
  }

  render() {
    const { username, password } = this.state;
    const isLoginBtnEnabled = username && password;

    return (
      <div className={classNames('RegisterPopup', {'HiddenLoginPopup': !this.props.isActive})}>
        <Header closeIcon={true} headerContext="请登录" onClick={this.props.onIconClick}/>
        <div className="content">
          <div className="image"><img className="logo" src={logo} alt="logo" /></div>
          <form className="form" onSubmit={this.onSubmit.bind(null, {username, password})}>
            <Input
              className="item"
              placeholder="用户名"
              mask={false}
              onChange={e => this.setState({username: e.target.value})}
            />
            <Input
              className="item"
              placeholder="密码"
              mask={true}
              onChange={e => this.setState({password: e.target.value})}
            />
            <div className="login-button">
              <ButtonWithColor type="submit" buttonContent="登陆" isGreyButton={!isLoginBtnEnabled} />
              <ButtonWithColor buttonContent="免费注册" onClick={this.props.goToRegister}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
