import React, { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'
import { useTheme } from '../theme/theme.provider'

export interface typographyProps extends HTMLAttributes<HTMLParagraphElement> {
    children: string | number | any;
    isBold?: boolean;
}

// these are simply extensions of the basic HTML tags to ensure styling is more consistently enforced
// in edge cases where global.css isn't applied (in storybook & in certain deployment env)
// and to better encourage theme color usage.

// headers don't handle the isBold prop as they are bold by default
export const XXLHeader: React.FC<typographyProps> = ({children, ...props}: typographyProps) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return <h1 className={`${props.className ? `` : `text-${theme}-text`} ${props.className}`}>{children}</h1>
}

export const XLHeader: React.FC<typographyProps> = ({children, ...props}: typographyProps) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return <h2 className={`${props.className ? `` : `text-${theme}-text`} ${props.className}`}>{children}</h2>
}

export const LGHeader: React.FC<typographyProps> = ({children, ...props}: typographyProps) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return <h3 className={`${props.className ? `` : `text-${theme}-text`} ${props.className}`}>{children}</h3>
}

export const MDHeader: React.FC<typographyProps> = ({children, ...props}: typographyProps) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return <h4 className={`${props.className ? `` : `text-${theme}-text`} ${props.className}`}>{children}</h4>
}

export const SMHeader: React.FC<typographyProps> = ({children, ...props}: typographyProps) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return <h5 className={`${props.className ? `` : `text-${theme}-text`} ${props.className}`}>{children}</h5>
}

export const XSHeader: React.FC<typographyProps> = ({children, ...props}: typographyProps) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return <h6 className={`${props.className ? `` : `text-${theme}-text`} ${props.className}`}>{children}</h6>
}

export const Paragraph: React.FC<typographyProps> = ({children, isBold = false, ...props}: typographyProps) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    let bold = isBold ? `font-bold` : ``;

    return <p className={`${props.className ? `` : `text-${theme}-text`} ${props.className} ${bold}`}>{children}</p>
}

export const SMParagraph: React.FC<typographyProps> = ({children, isBold = false, ...props}: typographyProps) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    let bold = isBold ? `font-bold` : ``;

    return <p className={`${props.className ? `` : `text-${theme}-text`} ${props.className} small ${bold}`}>{children}</p>
}