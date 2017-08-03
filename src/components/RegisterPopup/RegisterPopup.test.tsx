const React = require('react');
const { mount } = require('enzyme');
const sinon = require('sinon').sandbox.create();
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme());
const {expect} = chai;
import RegisterPopup from './RegisterPopup';

describe('RegisterPopup', () => {
  let registerPopup;
  let stubOnSubmit;
  let stubOnIconClick;

  beforeEach(() => {
    stubOnSubmit = sinon.stub();
    stubOnIconClick = sinon.stub();
    registerPopup = mount(<RegisterPopup onSubmit={stubOnSubmit} onIconClick={stubOnIconClick} />);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should render header with title', () => {
      expect(registerPopup.find('.title').text()).to.equal('注册');
  });

  it('should render logo', () => {
     expect(registerPopup.find('.logo')).to.have.prop('alt', 'logo');
  });

  it('should render three input field', () => {
    expect(registerPopup.find('.Input').length).to.equal(3);
  });

  it('should render submit button', () => {
    expect(registerPopup.find('.button-with-color').text()).to.equal('注册');
  });

  // it('should call submit method when click submit button', () => {
  //   registerPopup.find('.button-with-color').simulate('click');
  //
  //   expect(stubOnSubmit.called).to.be.true;
  // });

  it('should call onIconClock method when click close button', () => {
    registerPopup.find('.icon').simulate('click');

    expect(stubOnIconClick.called).to.be.true;
  });
});


