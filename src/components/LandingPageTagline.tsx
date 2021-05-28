import React from 'react';
import { useTheme } from '../theme/theme.provider';
import Button from './Button';
import Card from './containers/Card';
import { LGHeader, Paragraph, SMHeader, XLHeader } from './Typography';

export interface landingPageTaglineProps {
    onGetStarted: () => void;
}

const LandingPageTagline: React.FC<landingPageTaglineProps> = ({onGetStarted}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;
    return(
        <div className={`h-full`}>
            <Card className={`flex flex-col bg-${theme}-altbackground p-4 rounded-md h-full`}>
                <XLHeader className={`mb-2 text-${theme}-text border-b-2 border-${theme}-box-box3`}>Sideqst</XLHeader>
                <SMHeader className={`pb-4 text-${theme}-danger`}>TFT Tournaments made easy...</SMHeader>
                <Paragraph>The best place to find TFT lobbies, content, communities, and more...</Paragraph>
                <div className={`mt-4`}>
                    <Button onClick={onGetStarted} variant={"primary"}>Get Started</Button>
                </div>
            </Card>
        </div>
    )
}

export default LandingPageTagline;