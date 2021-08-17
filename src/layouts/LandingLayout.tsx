import React, { ReactElement } from "react";
import { useTheme } from "../theme/theme.provider";

interface landingLayoutProps {
  className?: string;
  children?: any;
}

const LandingLayout: React.FC<landingLayoutProps> = ({
  className,
  children,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  return (
    <>
      <div
        className={`flex flex-col mx-6 mt-4 md:mx-6 lg:mx-12 xl:mx-14 2xl:mx-96`}
      >
        {children}
      </div>
    </>
  );
};

export default LandingLayout;
