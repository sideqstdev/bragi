import React, { ReactNode } from "react";
import { useTheme } from "../theme/theme.provider";
import { Paragraph, SMHeader } from "./Typography";

export interface listHeaderProps {
  title: string;
  length?: number;
  iconLeft?: ReactNode;
}

const ListHeader: React.FC<listHeaderProps> = ({
  title,
  length,
  iconLeft,
  ...props
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  return (
    <div className={`my-2 border-b-2 border-${theme}-disabled`}>
      <div className={`flex-row flex justify-start`}>
        <Paragraph isBold={true}>{title}</Paragraph>
        <Paragraph
          isBold={true}
          className={`text-${theme}-primary hover:text-${theme}-primary-hover, ml-1`}
        >
          ({length})
        </Paragraph>
      </div>
    </div>
  );
};

export default ListHeader;
