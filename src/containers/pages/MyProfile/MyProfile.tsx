import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { push, goBack } from 'react-router-redux';
import { RouteComponentProps } from 'react-router';
import * as D from '../../../definitions';
import { Header, PersonalInfo, ButtonWithColor, Footer } from '../../../components';
import FooterMenu from '../../../components/Footer/FooterMenu';
import { userLogout } from '../../../modules/user/actions';

import './MyProfile.css';

type MyProfileProps<S> = DispatchProp<object> & RouteComponentProps<object> & {
  user: D.UserState,
};

const MyProfile = (props: MyProfileProps<object>) => {
  const { user, dispatch } = props;

  return (
    <div className="my-profile">
      <Header headerContext={'个人信息'} goBackIcon={true} onClick={() => dispatch(goBack())}/>
      <PersonalInfo personName={user.username}/>
      <div className="personal-info-button">
        <ButtonWithColor buttonContent={'已买宝贝'} onClick={() => props.dispatch(push('/bought-products'))}/>
      </div>
      <div className="personal-info-button">
        <ButtonWithColor buttonContent={'出售宝贝'} onClick={() => props.dispatch(push('/sold-out'))}/>
      </div>
      <div className="personal-info-button">
        <ButtonWithColor buttonContent={'退出登录'} onClick={() => {props.dispatch(userLogout(user)); props.dispatch(goBack());}}/>
      </div>
      <Footer activeMenu={FooterMenu.Person}/>
    </div>
  );
};

export default connect(
  (state: D.RootState<object>) => ({user: state.user})
)(MyProfile);
