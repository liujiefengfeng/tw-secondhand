const React = require('react');
const { mount } = require('enzyme');
const sinon = require('sinon').sandbox.create();
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme());
const {expect} = chai;
import { LoginPopup } from './LoginPopup';
import ButtonWithColor from '../ButtonWithColor/ButtonWithColor';

describe('LoginPopup', () => {
  let loginPopup;
  let stubOnSubmit;
  let stubGoToRegister;

  beforeEach(() => {
    stubOnSubmit = sinon.stub();
    stubGoToRegister = sinon.stub();
    loginPopup = mount(<LoginPopup
      onSubmit={stubOnSubmit}
      goToRegister={stubGoToRegister}
    />);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should render header with title', () => {
    expect(loginPopup.find('.title').text()).to.equal('请登录');
  });

  it('should render logo', () => {
    expect(loginPopup.find('.logo')).to.have.length(1);
  });

  it('should render three input field', () => {
    expect(loginPopup.find('.Input').length).to.equal(2);
  });

  it('should render submit button', () => {
    expect(loginPopup.find('.button-with-color').length).to.equal(2);
    expect(loginPopup.find('.button-with-color').at(0).text()).to.equal('登陆');
    expect(loginPopup.find('.button-with-color').at(1).text()).to.equal('免费注册');
  });

  it('should render submit button grey when username or password is empty', () => {
    expect(loginPopup.find(ButtonWithColor).at(0).props().isGreyButton).to.equal(true);
  });

  it('should render submit button enabled when username and password exist at same time', () => {
    loginPopup.setState({username: 'some', password: 'some'});
    expect(loginPopup.find(ButtonWithColor).at(0).props().isGreyButton).to.equal(false);
  });

});


