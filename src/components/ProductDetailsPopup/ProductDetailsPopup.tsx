const React = require('react');
import Header from '../Header/Header';
import * as P from '../ProductDetail/ProdcutDetail';

interface ProductDetailsPopupProps {
  onIconClick?: () => void;
  details: P.ProductDetailProps;
}

export default (props: ProductDetailsPopupProps) => (
  <div className="product-details-popup">
    <Header closeIcon={true} headerContext="商品详情" onClick={props.onIconClick}/>
    <P.ProductDetail {...props.details} />
  </div>
);
