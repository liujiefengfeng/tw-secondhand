import * as React from 'react';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import './Product.css';
import Price from '../Price/Price';
import User from '../User/User';

interface ProductProps {
  title: string;
  img: string;
  price: string;
  owner?: string;
  isClosed?: boolean;
  onClick?: () => void;
}

export const Status = ({isClosed}) => {
  const text = isClosed ? '交易关闭' : '出售中';
  return (
    <p className="message">{text}</p>
  );
};

export const Product = (props: ProductProps) => {
  return (
    <div className={classNames({'product': true}, {'grey': props.isClosed})} onClick={props.onClick}>
      <img className="image" src={props.img}/>
      <div className="info">
        <p className="message">{props.title}</p>
        <Price price={props.price}/>
        {_.isEmpty(props.owner) ?
          <Status isClosed={props.isClosed}/> : <User name={props.owner}/>}
      </div>
    </div>
  );
};
