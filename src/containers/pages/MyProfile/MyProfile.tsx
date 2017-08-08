import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import * as D from '../../../definitions';
import * as Components from '../../../components';
import FooterMenu from '../../../components/Footer/FooterMenu';

import './MyProfile.css';

type MyProfileProps<S> = DispatchProp<object> & RouteComponentProps<object> & {
  user: D.UserState,
};

const MyProfile = (props: MyProfileProps<object>) => {
  const { user } = props;
  
  return (
    <div className="my-profile">
      <Components.Header headerContext={'个人信息'}/>
      <Components.PersonalInfo personName={user.username}/>
      <div className="personal-info-button">
        <Components.ButtonWithColor buttonContent={'已买宝贝'}/>
      </div>
      <div className="personal-info-button">
        <Components.ButtonWithColor buttonContent={'出售宝贝'}/>
      </div>
      <div className="personal-info-button">
        <Components.ButtonWithColor buttonContent={'退出登录'}/>
      </div>
      <Components.Footer activeMenu={FooterMenu.Person}/>
    </div>
  );
};

export default connect(
  (state: D.RootState<object>) => ({user: state.user})
)(MyProfile);