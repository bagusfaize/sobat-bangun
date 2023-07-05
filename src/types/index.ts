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

export interface DetailsProps {
    title: string,
    logo: string,
    brand: string,
    houseType: string,
    designType: string,
    dimension: string,
    wide: number,
    floor: number,
    bed: number,
    designPrice: string,
    constructionPrice: string
}

export interface BrandDetailsProps {
    logo: string,
    brand: string,
}

export interface HouseSpecsProps {
    dimension: string
    wide: number
    floor: number
    bed: number
}

export interface PricingProps {
    designPrice: string,
    constructionPrice: string
}