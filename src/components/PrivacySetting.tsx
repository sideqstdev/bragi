import React from "react";
import { ReactNode } from "react";
import { FaCircle } from "react-icons/fa";
import { useTheme } from "../theme/theme.provider";
import { Paragraph } from "./Typography";

type levels = `friends` | `invite` | `password` | `public`;

export interface privacySettingInterface {
  level?: levels;
  label: string;
  iconRight?: ReactNode;
  onClick?: ({ level: levels, label: string }) => void;
  className?: string;
}

const PrivacySetting: React.FC<privacySettingInterface> = ({
  level = `public`,
  label,
  onClick,
  className,
  iconRight,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  const settingColor = (level: levels) => {
    switch (level) {
      case "friends":
        return `text-${theme}-danger`;
      case `invite`:
        return `text-${theme}-primary`;
      case `password`:
        return `text-warn`;
      case `public`:
        return `text-${theme}-confirm`;
      default:
        return `text-${theme}-disabled`;
    }
  };
  return (
    <div
      className={`flex flex-row justify-between bg-${theme}-box-box2 p-2 rounded-md cursor-pointer hover:bg-${theme}-box-box1 ${className}`}
      onClick={() => onClick({ level, label })}
    >
      <div className={`flex flex-row justify-start items-center`}>
        <span className={`text-tny items-center ${settingColor(level)} mr-2`}>
          <FaCircle />
        </span>
        <Paragraph isBold={true}>{label}</Paragraph>
      </div>
      {iconRight ? (
        <span
          className={`flex items-center ml-2 text-sm text-${theme}-disabled`}
        >
          {iconRight}
        </span>
      ) : null}
    </div>
  );
};

export default PrivacySetting;
