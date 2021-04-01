import React, { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps, useEffect} from 'react'
import { useTheme } from '../theme/theme.provider'
import {typography} from '../theme/themes'
import { Spinner } from './Spinner'

export const buttonSize = {
    default: `py-2 px-5 text-base`,
    small: `py-1 px-3 text-xxs`,
    large: `py-2 px-7 text-md`
}

export interface buttonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: "primary" | "confirm" | "danger" | "default" | "text" | "icon";
    size?: keyof typeof buttonSize;
    backgroundColor?: string;
    disabled?: boolean;
    iconRight?: ReactNode;
    iconLeft?: ReactNode;
    stretch?: boolean;
    loading?: boolean;
}

const Button: React.FC<buttonProps> = ({variant = "default", children, size = "default", backgroundColor, iconRight, iconLeft, stretch = false, loading, ...props}: buttonProps) => {
    const themeCtx = useTheme()
    const theme = themeCtx.theme

    const variantClass = {
        default: `text-${theme}-text bg-${theme}-default hover:bg-${theme}-default-hover`,
        primary: `text-dark-text bg-${theme}-primary hover:bg-${theme}-primary-hover`,
        confirm: `text-${theme}-text bg-${theme}-confirm hover:bg-${theme}-confirm-hover`,
        danger: `text-dark-text bg-${theme}-danger hover:bg-${theme}-danger-hover`,
        text: `text-${theme}-text bg-transparent hover:text-${theme}-disabled`,
        icon: `text-${theme}-text bg-transparent hover:text-${theme}-disabled text-xs`
    };
    

    // styling objects
    let variantObj;
    let sizeObj;
    let stretched = stretch ? `w-full` : ``;

    switch(variant){
        case "primary":
            variantObj = variantClass.primary
            break;
        case "confirm":
            variantObj = variantClass.confirm
            break;
        case "danger":
            variantObj = variantClass.danger
            break;
        case "text":
            variantObj = variantClass.text
            break;
        case "icon":
            variantObj = variantClass.icon
            break;
        default:
            variantObj = variantClass.default
            break;
    }

    switch(size){
        case "large":
            sizeObj = {fontSize: typography.web_sm, padding: "12px 24px"}
            break;
        case "small":
            sizeObj = {fontSize: typography.web_xxs, padding: "10px 16px"};
            break;
        default:
            sizeObj = {fontSize: typography.web_xs, padding: "11px 20px"}
            break;
    }

    return(
        <button 
        {...props}
        style={{backgroundColor: backgroundColor}} 
        className={`${props.className} ${variantObj} ${buttonSize[size]} ${stretched} font-bold flex items-center justify-center rounded-md focus:outline-none`}>
            <span className={`flex items-center`}>
            {iconLeft ? <span className={`mr-2 items-center text-tny`}>{iconLeft}</span> : null}
            </span>
            {children}
            <span className={`flex items-center`}>
            {iconRight ? <span className={`ml-2 items-center text-tny`}>{iconRight}</span> : null}
            </span>
            {loading ? (
                <span className={`absolute`}>
                    <Spinner size={size === `small` ? `2` : `4`}/>
                </span>
            ) : null}
            
        </button>
    )
}

export default Button