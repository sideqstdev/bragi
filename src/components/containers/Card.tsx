import React, { DetailedHTMLProps, ReactElement } from 'react'
import { useTheme } from '../../theme/theme.provider'

export interface cardProps{
    children: ReactElement | ReactElement[] | Element | Element[] | any;
    className?: string;
}

const Card: React.FC<cardProps> = ({children, ...props}: cardProps) => {
    const themeCtx = useTheme()
    const theme = themeCtx.theme


    return(
        // prop classNames should override existing
        <div {...props} className={`${props.className} p-3 bg-${theme}-box-box1 text-${theme}-text rounded-md `}>
            {children}
        </div>
    )
}


export default Card