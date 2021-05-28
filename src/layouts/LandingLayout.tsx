import React, { ReactElement } from 'react';
import { useTheme } from '../theme/theme.provider';

interface landingLayoutProps {
    className?: string;
    featured: ReactElement | Element;
    welcome: ReactElement | Element;
}

const LandingLayout: React.FC<landingLayoutProps> = ({className, featured, welcome}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return(
        <>
            <div className={`flex flex-col xl:flex-row mt-4 md:mx-8 lg:mx-32`}>
                <div className={`mb-4 mx-4 xl:mb-0 xxl:min-w-max`}>
                    {welcome}
                </div>
                <div className={`flex-grow mx-4`}>
                    {featured}
                </div>
            </div>
        </>
    )
}

export default LandingLayout