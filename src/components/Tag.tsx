import React, { DetailedHTMLProps, ReactNode } from 'react';
import { useTheme } from '../theme/theme.provider';

export interface tagProps {
    glow?: boolean;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
}

const Tag: React.FC<tagProps> = ({children, glow, iconLeft, iconRight}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return(
        <div className={`flex flex-grow-0 flex-none flex-row w-auto cursor-pointer bg-${theme}-default hover:bg-${theme}-default-hover font-bold text-${theme}-text text-xxs round rounded-sm justify-center items-center px-2 ${glow ? `border` : ``}`}
        style={{
            height: "22px",
            boxShadow: glow ? `0px 0px 7px var(--color-lightred1` : ``,
            border: glow ? `.5px solid var(--color-lightred1)` : ``,
        }}>
            <span className={`flex items-center`}>
                {iconLeft ? <span className={`mr-2 items-center text-tny`}>{iconLeft}</span> : null}
            </span>
            {children}
            <span className={`flex items-center`}>
                {iconRight ? <span className={`ml-2 items-center text-tny`}>{iconRight}</span> : null}
            </span>
        </div>
    )
}

export default Tag;