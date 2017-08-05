import * as React from 'react';
import * as classNames from 'classnames';
import './ButtonWithColor.css';

interface ButtonWithColorProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isGreyButton?: boolean;
    buttonContent: string;
}

export default (props: ButtonWithColorProps) => (
    <div className={'button-with-color'} >
      <button
        className={classNames({'button-grey': props.isGreyButton})}
        onClick={props.onClick}
      >
        {props.buttonContent}
      </button>
    </div>
);
