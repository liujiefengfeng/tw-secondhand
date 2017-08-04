import * as React from 'react';
import './ProductDetail.css';
import User from '../User/User';
import Price from '../Price/Price';
import ButtonWithColor from '../ButtonWithColor/ButtonWithColor';

export interface ProductDetailProps {
  img: string;
  title: string;
  price: string;
  user: string;
  details: string;
  onClick: () => void;
}

export const ProductDetail = (props: ProductDetailProps) => (
  <div className="ProductDetail">
    <div className="image"><img className="product-img" src={props.img} alt="商品详情图片"/></div>
    <div className="product-brief">
      <div className="left"><div className="product-title">{props.title}</div></div>
      <div className="right">
        <Price price={props.price} />
        <User name={props.user} />
      </div>
    </div>
    <div className="product-details">{props.details.split('\n').map((detail, index) => {
      return <div key={index}>{detail}</div>;
    })}</div>
    <ButtonWithColor buttonContent="立即购买" onClick={props.onClick} />
  </div>
);
