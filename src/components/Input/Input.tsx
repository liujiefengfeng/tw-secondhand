import * as React from 'react';
import './Input.css';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  mask: boolean;
}

export default (props: InputProps) => {
    const {mask, ...rest} = props;
    return(
      <div className="Input">
        {
          mask
          ? <input type="password" {...rest} />
          : <input {...rest} />
        }
      </div>
    );
};
