import React from 'react'
import { SMParagraph } from './Typography'

export const sizeClass = {
    xxs: `h-6 w-6`,
    xs: `h-8 w-8`,
    sm: `h-9 w-9`,
    default: `h-11 w-11`,
    lg: `h-12 w-12`,
    xl: `h-16 w-16`,
    xxl: `h-24 w-24`
}

export interface avatarProps {
    src: string;
    size?: keyof typeof sizeClass;
    className?: string;
}



export const Avatar: React.FC<avatarProps> = ({src, size=`default`, className=``, level}: avatarProps) => {
    return(
        <div className={`relative inline-block ${className} ${sizeClass[size]}`}>
            <img alt={"avatar"} className={`rounded-md w-full h-full object-cover outline-none`} src={src}/>
        </div>
    )
}