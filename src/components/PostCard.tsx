import React from "react";
import { useTheme } from "../theme/theme.provider";
import Card from "./containers/Card";
import PlayerTag from "./PlayerTag";
import Button from "./Button";
import { Paragraph, SMHeader } from "./Typography";
import { BiDotsHorizontalRounded, BiHeart } from "react-icons/bi";

export type postUser = {
  avatar: string;
  username: string;
  gamertag: string;
  verified?: boolean;
};

export interface postCardProps {
  user: postUser;
  likes?: number;
  liked?: boolean;
  title: string;
  content?: string;
  image?: string;
  postDate: Date;
  tags?: [string, string, string];
}

const PostCard: React.FC<postCardProps> = ({
  user,
  likes = 0,
  liked = false,
  content,
  title,
  image,
  postDate,
  tags,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  return (
    <Card className={`flex flex-col`}>
      <div
        className={`flex-row flex px-4 py-4 justify-between border-b-2 border-${theme}-disabled`}
      >
        <PlayerTag
          username={user.username}
          gamertag={user.gamertag}
          verified={user.verified}
          avatar={user.avatar}
        />
        <div className={`flex flex-row items-center`}>
          <Button variant={`icon`}>
            <BiDotsHorizontalRounded />
          </Button>
          <Button variant={`icon`}>
            <BiHeart
              className={`${
                liked ? `text-${theme}-danger hover:text-${theme}-text` : ``
              }`}
            />
          </Button>
        </div>
      </div>
      <div className={`flex flex-col px-4 py-4`}>
        <SMHeader className={`mb-1`}>{title}</SMHeader>
        <Paragraph>{content}</Paragraph>
        <div
          className={`flex bg-dark-box-box2 w-full h-auto mt-2 relative justify-center rounded-md`}
        >
          <img
            className={`w-full rounded-md object-cover max-h-112`}
            src={image}
          />
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
