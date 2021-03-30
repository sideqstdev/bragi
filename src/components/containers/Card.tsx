import React, { DetailedHTMLProps, ReactElement, CSSProperties } from 'react'
import { useTheme } from '../../theme/theme.provider'

export interface cardProps extends Partial<HTMLDivElement>{
    children?: any;
}

const Card: React.FC<cardProps> = ({children, style, ...props}) => {
    const themeCtx = useTheme()
    const theme = themeCtx.theme

    return(
        // prop classNames should override existing
        <div style={style as CSSProperties} className={`${props.className} p-3 bg-${theme}-box-box1 text-${theme}-text rounded-md `}>
            {children}
        </div>
    )
}


export default Card