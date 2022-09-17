import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Property } from 'csstype';

export type TBoxProps = {
    className?: string;
    alignItems?: Property.AlignItems;
    justifyContent?: Property.JustifyContent;
    display?: Property.Display;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
