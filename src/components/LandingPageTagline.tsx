import React from 'react';
import { useTheme } from '../theme/theme.provider';
import Button from './Button';
import { LGHeader, Paragraph, SMHeader, XLHeader } from './Typography';

export interface landingPageTaglineProps {}

const LandingPageTagline: React.FC<landingPageTaglineProps> = () => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;
    return(
        <div className={`flex flex-row mx-2`}>
            <div className={`flex flex-col bg-dark-altbackground p-4 rounded-md`}>
                <XLHeader className={`pb-2 text-${theme}-text`}>Sideqst</XLHeader>
                <SMHeader className={`pb-4 text-${theme}-confirm`}>TFT Tournaments made easy...</SMHeader>
                <Paragraph>The best place to find TFT lobbies, content, communities, and more...</Paragraph>
                
                <Button>Get Started</Button>
            </div>

        </div>
    )
}

export default LandingPageTagline;