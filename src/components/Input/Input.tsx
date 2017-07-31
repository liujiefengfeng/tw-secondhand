import * as React from 'react';
import './Input.css';
const MaskedInputElement = require('react-input-mask');

interface InputProps {
  mask: boolean;
  placeholder?: string;
  value?: string;
}

export default (props: InputProps) => {
    const {mask, ...rest} = props;
    return(
      <div className="Input">
        {
          mask
          ? <MaskedInputElement {...rest} />
          : <input {...rest}/>
        }
      </div>
    );
};
