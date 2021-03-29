import React from 'react'
import { useTheme } from '../theme/theme.provider'
import { XXL_Header } from '../stories/Typography.stories';

interface authLayoutProps {
    className?: string;
}

const AuthLayout: React.FC<authLayoutProps> = ({className, children}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return(
        <>
            <div className={`${className ? className : ``} flex flex-col justify-center items-center pt-24 ml-3 mr-3 pb-3 min-h-screen`}>
                    {children}
            </div>
        </>
    )
}

export default AuthLayout