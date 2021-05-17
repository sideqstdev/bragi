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
            <div className={`flex flex-col lg:flex-row mt-4`}>
                <div className={`flex-none mb-4 lg:mb-0 px-6 lg:pl-6 lg:pr-0 h-full lg:sticky top-36 lg:top-24 w-full lg:max-w-sm flex-col`}>
                    {sidebar}
                </div>
                <div className={`flex-auto h-full w-full px-6 relative`}>
                    {main}
                </div>
            </div>
        </>
    )
}

export default DesktopLayout