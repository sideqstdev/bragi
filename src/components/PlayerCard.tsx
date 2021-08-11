import React from "react";
import { useTheme } from "../theme/theme.provider";
import Card from "./containers/Card";
import { Avatar } from "./Avatar";
import { MDHeader, SMParagraph, Paragraph } from "./Typography";
import { AiFillCheckCircle } from "react-icons/ai";
import Tag from "./Tag";
import { simplifyNumber } from "../lib/util/number-formatting";
import { Spinner } from "./Spinner";

export interface playerCardProps {
  avatar: string;
  username: string;
  gamertag: string;
  bio: string;
  tags: string[];
  followers: number;
  following: number;
  isVerified: boolean;
  loading?: boolean;
}

const PlayerCard: React.FC<playerCardProps> = ({
  avatar,
  username,
  gamertag,
  bio,
  tags,
  followers,
  following,
  isVerified,
  loading = false,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  if (loading) {
    return (
      <Card className={`px-3 py-3 h-32 flex items-center justify-center`}>
        <Spinner size={`6`} />
      </Card>
    );
  }

  return (
    <Card className={`flex flex-col px-3 py-3`}>
      <div className={`flex flex-row`}>
        <Avatar size={`xxl`} src={avatar} />
        <div className={`flex flex-1 overflow-x-hidden flex-col ml-3`}>
          <div className={`flex flex-row items-center`}>
            <MDHeader className={`truncate`}>{username}</MDHeader>
            {isVerified ? (
              <span className={`ml-1 `}>
                <AiFillCheckCircle className={`text-accent text-md`} />
              </span>
            ) : null}
          </div>
          <SMParagraph className={`text-${theme}-disabled`}>
            {`@` + gamertag}
          </SMParagraph>
          <Paragraph className={`line-clamp-2`}>{bio}</Paragraph>
        </div>
      </div>
      <div className={`flex mt-3 flex-row`}>
        {tags.map((tag, i) => {
          return (
            <div key={i} className={`mr-2`}>
              <Tag>{tag}</Tag>
            </div>
          );
        })}
      </div>
      <div className={`flex flex-row mt-2`}>
        <div className={`flex flex-row mr-3`}>
          <SMParagraph className={`text-${theme}-text mr-1`} isBold={true}>
            {simplifyNumber(followers)}
          </SMParagraph>
          <SMParagraph className={`text-${theme}-disabled`} isBold={true}>
            followers
          </SMParagraph>
        </div>
        <div className={`flex flex-row`}>
          <SMParagraph className={`text-${theme}-text mr-1`} isBold={true}>
            {simplifyNumber(following)}
          </SMParagraph>
          <SMParagraph className={`text-${theme}-disabled`} isBold={true}>
            following
          </SMParagraph>
        </div>
      </div>
    </Card>
  );
};

export default PlayerCard;
