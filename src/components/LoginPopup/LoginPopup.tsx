import * as React from 'react';
import Input from '../Input/Input';
import Header from '../Header/Header';
import ButtonWithColor from '../ButtonWithColor/ButtonWithColor';
import '../RegisterPopup/RegisterPopup.css';
import './LoginPopup.css';
const logo = require('../RegisterPopup/logo.png');

interface LoginPopupProps {
  onSubmit: (username: string, password: string) => void;
  goToRegister: () => void;
}

export class LoginPopup extends React.Component<LoginPopupProps, any> {

  constructor(props: LoginPopupProps) {
    super(props);
    this.state = {};
  }

  onSubmit() {
    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    const isLoginBtnEnabled = this.state.username && this.state.password;

    return (
      <div className="RegisterPopup">
        <Header closeIcon={true} headerContext="请登录" onClick={this.props.goToRegister}/>
        <div className="content">
          <div className="image"><img className="logo" src={logo} alt="logo" /></div>
          <form className="form" onSubmit={() => this.onSubmit()}>
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
              <ButtonWithColor buttonContent="免费注册" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
