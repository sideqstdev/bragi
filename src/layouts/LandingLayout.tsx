import React, { ReactElement } from "react";
import { useTheme } from "../theme/theme.provider";

interface landingLayoutProps {
  className?: string;
  featured: ReactElement | Element;
  welcome: ReactElement | Element;
}

const LandingLayout: React.FC<landingLayoutProps> = ({
  className,
  featured,
  welcome,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  return (
    <>
      <div
        className={`flex flex-col xl:flex-row mt-4 md:mx-6 lg:mx-12 xl:mx-14 2xl:mx-56`}
      >
        <div className={`mb-4 mx-4 xl:mb-0 xl:min-w-max`}>{welcome}</div>
        <div className={`flex-grow mx-4`}>{featured}</div>
      </div>
    </>
  );
};

export default LandingLayout;
