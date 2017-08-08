const React = require('react');
import Header from '../Header/Header';
import * as P from '../ProductDetail/ProdcutDetail';
import * as classNames from 'classnames';
import './ProductDetailsPopup.css';

interface ProductDetailsPopupProps {
  onIconClick?: () => void;
  isActive?: boolean;
  details: P.ProductDetailProps;
}

export default (props: ProductDetailsPopupProps) => (
  <div className={classNames('product-details-popup', {'hidden-product-details-popup': !props.isActive})}>
    <Header closeIcon={true} headerContext="商品详情" onClick={props.onIconClick}/>
    <P.ProductDetail {...props.details} />
  </div>
);
