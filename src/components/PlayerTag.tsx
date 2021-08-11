import React from "react";
import { useTheme } from "../theme/theme.provider";
import { Avatar } from "./Avatar";
import { Paragraph, SMParagraph } from "./Typography";
import { AiFillCheckCircle } from "react-icons/ai";
import PlayerStatus, { status } from "./PlayerStatus";

export interface playerTagProps {
  avatar: string;
  username: string;
  gamertag: string;
  verified?: boolean;
  rightContent?: any;
}

const PlayerTag: React.FC<playerTagProps> = ({
  avatar,
  username,
  verified = false,
  gamertag,
  rightContent,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  return (
    <div className={`flex flex-row w-full justify-between items-center`}>
      <div className={`flex flex-row`}>
        <Avatar src={avatar} size={"default"} />
        <div className={`flex flex-col ml-2 text-left`}>
          <Paragraph
            className={`flex flex-row text-${theme}-text`}
            isBold={true}
          >
            {username}{" "}
            {verified ? (
              <span className={`ml-1 flex items-center`}>
                <AiFillCheckCircle className={`text-accent text-xxs`} />
              </span>
            ) : null}
          </Paragraph>
          <SMParagraph
            className={`text-${theme}-disabled`}
          >{`@${gamertag}`}</SMParagraph>
        </div>
      </div>
      <div className={`ml-4`}>{rightContent}</div>
    </div>
  );
};

export default PlayerTag;
