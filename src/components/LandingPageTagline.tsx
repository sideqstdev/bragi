import React from "react";
import { useTheme } from "../theme/theme.provider";
import Button from "./Button";
import Card from "./containers/Card";
import { LGHeader, Paragraph, SMHeader, XLHeader } from "./Typography";

export interface landingPageTaglineProps {
  onGetStarted: () => void;
}

const LandingPageTagline: React.FC<landingPageTaglineProps> = ({
  onGetStarted,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  return (
    <div className={`h-full`}>
      <Card
        className={`flex flex-col md:flex-row bg-${theme}-altbackground p-4 rounded-md h-full`}
      >
        <div className={`flex pr-4 rounded-md`}>
          <img className={`rounded-md object-cover`} src={`./lobbycover.jpg`} />
        </div>
        <div className={`flex flex-col`}>
          <XLHeader
            className={`mb-2 text-${theme}-text border-b-2 border-${theme}-box-box3`}
          >
            Sideqst - Teamfight Tactics
          </XLHeader>
          <SMHeader className={`pb-4 text-${theme}-danger`}>
            TFT Tournaments made easy...
          </SMHeader>
          <Paragraph>
            The best place to find TFT lobbies, content, communities, and
            more... Engage with your community and host scheduled or one-off
            tournaments with ease. Designed by players, Sideqst has been built
            from the ground up to support competitive and casual tournaments of
            all skillsets.
          </Paragraph>
          <div className={`mt-4`}>
            <Button onClick={onGetStarted} variant={"primary"}>
              Get Started
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LandingPageTagline;
