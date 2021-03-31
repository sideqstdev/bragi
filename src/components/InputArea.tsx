import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import { useTheme } from '../theme/theme.provider'

export const inputScale = {
    default: `py-2 px-5 text-base`,
    small: `py-1 px-3 text-xxs`,
    large: `py-2 px-7 text-md`
}

export interface inputAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    scale?: keyof typeof inputScale;
    stretch?: boolean;
    variant?: "default" | "alt";
    label?: string;
    error?: string;
}

const InputArea: React.FC<inputAreaProps> = ({stretch=false, scale="default", variant, label, error, ...props}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    const inputVariant = {
        default: `bg-${theme}-box-box2 focus:bg-${theme}-box-box2`,
        alt: `bg-${theme}-box-box1 focus:bg-${theme}-box-box1`
    }

    let variantObj;
    let stretched = stretch ? `w-full` : `w-max`

    switch(variant){
        case "alt":
            variantObj = inputVariant.alt
            break
        default:
            variantObj = inputVariant.default
            break
    }

    return(
        <div className={`${props.className ? props.className : ``} flex flex-col ${stretched}`}>
                <div className={`flex flex-row justify-between`}>
                    {label ? <label className={`text-${theme}-text`}>{label}</label> : null}
                    {error ? <label className={`text-${theme}-danger text-right w-full`}>{error}</label> : null}
                </div>
                <div className={`${inputScale[scale]} ${error ? `ring-1 ring-dark-danger` : ``} ${variantObj} ${stretched} flex items-center rounded-md`}>
                    <textarea
                    ref={props.ref as any}
                    {...(props as any)}
                    className={`${variantObj} w-full flex items-center outline-none text-${theme}-text`}/>
                </div>
            </div>
    )
}

export default InputArea