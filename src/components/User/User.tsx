import * as React from 'react';
import './User.css';
const user = require('./yellowUser.ico');

interface UserProps {
  name: string;
}

export default (props: UserProps) => (
  <div className="User">
    <img src={user} />
    <span>{props.name}</span>
  </div>
);
