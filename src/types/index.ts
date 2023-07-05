import {MouseEventHandler} from 'react';

export interface ButtonProps {
    text: string;
    className?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}