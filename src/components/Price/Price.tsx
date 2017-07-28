import * as React from 'react';
import './Price.css';

interface PriceProps {
  price: string;
}

export default (props: PriceProps) => (
  <div className="Price">&yen; {props.price}</div>
);
