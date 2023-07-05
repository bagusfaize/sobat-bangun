import {MouseEventHandler, ReactNode} from 'react';

export interface ButtonProps {
    text: string;
    className?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ContainerProps {
    children: ReactNode
}

export interface ImageCardProps {
    title: string,
    desc: string,
    imagePath: string
}

export interface ContentTitleProps {
    title: string
}