import * as React from 'react';
import './ButtonWithColor.css';

interface ButtonWithColorProps {
    color?: string;
    buttonContent: string;
}

export default (props: ButtonWithColorProps) => (
    <div className={'button-with-color'} >
        <button>{props.buttonContent}</button>
    </div>
);