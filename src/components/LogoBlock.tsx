import React from "react";
import { useTheme } from "../theme/theme.provider";

export interface logoProps {
  lightLogo?: string;
  darkLogo?: string;
  onClick: () => void;
}

const LogoBlock: React.FC<logoProps> = ({
  lightLogo = "/sideqst-light.svg",
  darkLogo = "/sideqst-dark.svg",
  onClick,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  switch (theme) {
    case "light":
      return (
        <div
          onClick={onClick}
          className={`flex flex-row items-center cursor-pointer`}
        >
          <span className={`mr-2`}>
            <img alt={`logo`} width={60} height={60} src={darkLogo} />
          </span>
          <h3>Sideqst</h3>
        </div>
      );
    default:
      return (
        <div
          onClick={onClick}
          className={`flex flex-row items-center cursor-pointer`}
        >
          <span className={`mr-2`}>
            <img alt={`logo`} width={60} height={60} src={lightLogo} />
          </span>

          <h3>Sideqst</h3>
        </div>
      );
  }
};

export default LogoBlock;
