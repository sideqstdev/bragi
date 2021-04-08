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
            <div className={`${className ? className : ``} flex flex-col min-h-screen mx-4`}>
                <div className={`flex flex-col items-center mt-60`}>
                    {children}
                    <div className={`mt-3 flex w-full items-center justify-center`}>
                        <Paragraph>
                            By using Sideqst, you agree to our <span className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled`}>terms</span>, <span className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled`}>privacy</span>, and <span className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled`}>cookie</span> policies</Paragraph>
                    </div>
                </div>
                    
                    
            </div>
        </>
    )
}

export default AuthLayout