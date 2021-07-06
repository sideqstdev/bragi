import { useTheme } from "../theme/theme.provider"
import { Paragraph, XSHeader } from "./Typography";
import { useEffect, useState } from "react";
import Button from "./Button";
import { FaInfoCircle, FaTimes } from "react-icons/fa";
import { useErrorToasts } from "../lib/hooks/useErrorToast";
import { AiOutlineInfoCircle, AiOutlineWarning, AiFillWarning, AiFillFire, AiFillInfoCircle, AiFillNotification } from "react-icons/ai";

export const variants = {
    danger: `bg-dark-danger text-dark-text`,
    info: `bg-dark-primary text-dark-text`,
    warning: `bg-warn text-light-text`,
    notice: `bg-accent text-dark-text`
}

export const variantIcons = {
    danger: <AiFillFire className={`text-md`}/>,
    info: <AiFillInfoCircle className={`text-md`}/>,
    warning: <AiFillWarning className={`text-md`}/>,
    notice: <AiFillNotification className={`text-md`}/>
}

export interface errorToastProps {
    duration?: number;
    title: string;
    message?: string;
    type?: "temporary" | "static";
    variant?: keyof typeof variants;
    customColor?: string;
    onClose?: () => void;
}

const ErrorToast: React.FC<errorToastProps> = ({duration = 7000, customColor,  message, title, type = "temporary", variant = "info", onClose, ...props}) => {
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
        <div className={`flex flex-wrap justify-between items-center ${variants[variant]} bg-opacity-75 relative min-w-full transition-transform duration-300 rounded-md px-5 py-2`} style={{backgroundColor: customColor}}>
            <div className={`flex flex-row items-center`}>
                <span className={`mr-3`}>
                    {variantIcons[variant]}
                </span>
                <div className={`pr-5 flex flex-col max-w-xs`}>
                    <XSHeader className={variants[variant]} style={{backgroundColor: customColor}} isBold={true}>{title}</XSHeader>
                    <Paragraph className={variants[variant]} style={{backgroundColor: customColor}}>{message}</Paragraph>
                </div>
            </div>
            <div className={`flex justify-end`}>
                <a onClick={onClose} className={`cursor-pointer ml-3 hover:text-${theme}-disabled`}>
                    <FaTimes className={`text-md`}/>
                </a>
            </div>
        </div>
    )
}

export default ErrorToast