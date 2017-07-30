import * as React from 'react';
import {isNull, isUndefined} from 'util';
import './Product.css';
import Price from '../Price/Price';
import User from '../User/User';

interface ProductProps {
  image: string;
  price: string;
  owner?: string;
  isClosed?: boolean;
}

export const Status = ({isClosed}) => {
  const text = isClosed ? '交易关闭' : '出售中';
  return (
    <p>{text}</p>
  );
};

export const Product = (props: ProductProps) => {
  return (
    <div className="product">
      <img src={props.image} />
      <div className="info">
        <Price price={props.price}/>
        {isNull(props.owner) || isUndefined(props.owner) ?
          <Status isClosed={props.isClosed} /> : <User name={props.owner} />}
      </div>
    </div>
  );
};


