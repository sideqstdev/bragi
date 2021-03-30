import React from 'react'
import { useTheme } from '../theme/theme.provider'
import { XXL_Header } from '../stories/Typography.stories';
import { Paragraph } from '../components/Typography';

interface authLayoutProps {
    className?: string;
}

const AuthLayout: React.FC<authLayoutProps> = ({className, children}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return(
        <>
            <div className={`${className ? className : ``} flex flex-col items-center mx-3 pt-36 lg:pt-24 pb-3 min-h-screen`}>
                    <div className={`h-64`}/>
                    {children}
                    <div className={`mt-3 flex items-start`}>
                        <Paragraph>
                            By using Sideqst, you agree to our <span className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled`}>terms</span>, <span className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled`}>privacy</span>, and <span className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled`}>cookie</span> policies</Paragraph>
                    </div>
            </div>
        </>
    )
}

export default AuthLayout