import * as React from 'react';
import './ProductDescribeBox.css';

export default (props: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => (
    <textarea className="ProdcutDescribeBox" placeholder="添加描述..." {...props}/>
);
