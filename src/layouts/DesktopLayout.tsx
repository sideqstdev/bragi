import React, { ReactElement, ReactNode } from 'react';
import { useTheme } from '../theme/theme.provider';

interface desktopLayoutProps {
    className?: string;
    sidebar: ReactElement | Element;
    main: ReactElement | Element;
}

const DesktopLayout: React.FC<desktopLayoutProps> = ({className, sidebar, main}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return(
        <>
            <div className={`${className ? className : ``} flex pt-24 flex-row ml-3 mr-3 pb-3 min-h-screen`}>
                <div className={`flex-none max-w-sm md:max-w-sm mr-6`}>
                    {sidebar}
                </div>
                <div className={`flex-1`}>
                    {main}
                </div>
            </div>
        </>
        
    )
}

export default DesktopLayout