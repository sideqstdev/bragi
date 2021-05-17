import { useTheme } from "../theme/theme.provider"
import { Paragraph } from "./Typography";
import { useEffect, useState } from "react";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import { useErrorToasts } from "../lib/hooks/useErrorToast";

export const variants = {
    danger: `bg-dark-danger text-dark-text`,
    info: `bg-dark-primary text-dark-text`,
    warning: `bg-warn text-light-text`,
    notice: `bg-accent`
}

export interface errorToastProps {
    duration?: number;
    message: string;
    type?: "temporary" | "static";
    variant?: keyof typeof variants;
    onClose?: () => void;
}

const ErrorToast: React.FC<errorToastProps> = ({duration = 7000, message, type = "static", variant = "info", onClose, ...props}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;


    useEffect(() => {
        // if we have a static toast then it won't disappear after duration
        if(type === "static"){
            return;
        }

        const timer = setTimeout(() => {
            onClose()
        }, duration)
        return () => {
            clearTimeout(timer)
        }
    }, [type]) 

    //naive way to do it needs a global store likely

    return(
        <div className={`flex justify-center items-center ${variants[variant]} transition-transform duration-300 rounded-md px-10 py-2 bg-opacity-50`}>
        <Paragraph className={variants[variant]} isBold={true}>{message}</Paragraph>
        <a onClick={onClose} className={`cursor-pointer px-2 hover:text-${theme}-disabled`}>
            <FaTimes className={`text-xxs`}/>
        </a>
        </div>
    )
}

export default ErrorToast