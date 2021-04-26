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
            <div className={`flex mt-4`}>
                <div className={`flex-none pl-6 h-full sticky top-36 lg:top-24 max-w-sm md:max-w-sm flex-col`}>
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