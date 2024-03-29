import React from "react";
import { formatDate } from "../lib/util/time-utils";
import { useTheme } from "../theme/theme.provider";
import Card from "./containers/Card";
import {
  MDHeader,
  Paragraph,
  SMHeader,
  XSHeader,
  SMParagraph,
} from "./Typography";
import StatusButton from "./StatusButton";
import PlayerCount from "./PlayerCount";
import PlayerTag from "./PlayerTag";
import TagGroup from "./TagGroup";
import { BiTrophy, BiGlobeAlt, BiDollar } from "react-icons/bi";

export enum ranks {
  iron = "Iron+",
  bronze = "Bronze+",
  silver = "Silver+",
  gold = "Gold+",
  platinum = "Platinum+",
  diamond = "Diamond+",
  master = "Master+",
  grandmaster = "Grandmaster+",
  challenger = "Challenger only",
  any = "Any rank",
}

export enum regions {
  NA = "North America",
  EUW = "Europe West",
  EUNE = "Europe Nordic East",
  LAN = "Latin America North",
  LAS = "Latin America South",
  BR = "Brazil",
  OCE = "Oceania",
  RU = "Russia",
  TR = "Turkey",
  JP = "Japan",
  KR = "Korea",
  PBE = "PBE",
  ANY = "Any Region",
}

export type lobbyUser = {
  avatar: string;
  username: string;
  gamertag: string;
  verified?: boolean;
};

export interface lobbyCardProps {
  user: lobbyUser;
  featured?: boolean;
  title: string;
  description?: string;
  date: Date;
  tags: string[];
  prize: number;
  prizeUnit?: "USD" | "RP" | "Other";
  region?: regions;
  maxPlayers: number;
  currPlayers: number;
  status: "open" | "closed" | "inprogress" | "finished";
  rank?: ranks;
  banner?: string;
  onClick: () => void;
}

const LobbyCard: React.FC<lobbyCardProps> = ({
  title,
  description,
  featured = false,
  date = new Date(),
  tags,
  prize,
  prizeUnit = "none",
  region = "NA",
  maxPlayers,
  currPlayers,
  status,
  rank,
  banner,
  user,
  onClick,
  ...props
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  const formatPrize = (prize: number): string => {
    if (prizeUnit === "USD") {
      return prize.toFixed(2);
    } else {
      return prize.toString();
    }
  };

  return (
    <button onClick={onClick} className={`hover:border flex flex-col w-full`}>
      <Card className={`flex flex-col w-full`}>
        {banner ? (
          <div className={`w-full relative`}>
            <img
              src={banner}
              className={`w-full h-64 object-cover rounded-t-md`}
            />
            {featured ? (
              <div
                className={`bg-${theme}-danger rounded-tl-md rounded-br-md w-64 px-4 py-1 text-left absolute left-0 top-0`}
              >
                <SMHeader>Featured</SMHeader>
              </div>
            ) : null}
          </div>
        ) : null}
        <div className={`flex flex-col md:flex-col xl:flex-row`}>
          <div
            className={`flex flex-col w-full pb-4 xl:w-3/4 cursor-pointer text-left`}
          >
            {featured && !banner ? (
              <div
                className={`mb-2 lg:flex flex-row items-center justify-between`}
              >
                <div
                  className={`bg-${theme}-danger rounded-tl-md rounded-t-md lg:rounded-tr-none lg:rounded-br-md w-full lg:w-64 px-4 py-1 text-left items-center`}
                >
                  <SMHeader>Featured</SMHeader>
                </div>
                <div
                  className={`flex flex-row items-center pt-4 pr-4 lg:pt-0 lg:pr-4 w-full justify-end`}
                >
                  <span>
                    <StatusButton status={status} />
                  </span>
                  <span className={`ml-2`}>
                    <PlayerCount
                      currPlayers={currPlayers}
                      maxPlayers={maxPlayers}
                    />
                  </span>
                </div>
              </div>
            ) : null}
            <div className={`flex flex-col px-4`}>
              {featured && !banner ? (
                <MDHeader className={`mt-1`}>{title}</MDHeader>
              ) : (
                <div className={`flex flex-row items-center justify-between`}>
                  <MDHeader className={`mt-3 flex w-full`}>{title}</MDHeader>
                  <div
                    className={`flex flex-row items-center w-full justify-end`}
                  >
                    <span>
                      <StatusButton status={status} />
                    </span>
                    <span className={`ml-2`}>
                      <PlayerCount
                        currPlayers={currPlayers}
                        maxPlayers={maxPlayers}
                      />
                    </span>
                  </div>
                </div>
              )}
              <Paragraph isBold={true} className={`text-${theme}-confirm mt-1`}>
                {formatDate(date)}
              </Paragraph>
              <Paragraph className={`mt-2`}>{description}</Paragraph>
              <TagGroup className={`mt-3`} tags={tags} />
            </div>
          </div>
          <div
            className={`flex flex-col w-full bg-${theme}-box-box2 rounded-b-md xl:rounded-b-none xl:rounded-br-md ${
              banner ? `` : `xl:rounded-tr-md`
            } py-2 px-2 xl:w-1/4`}
          >
            <span className={`w-full pb-2 border-b-2 border-${theme}-disabled`}>
              <PlayerTag
                verified={user.verified}
                username={user.username}
                gamertag={user.gamertag}
                avatar={user.avatar}
              />
            </span>
            <div className={`flex flex-col w-full`}>
              <span className={`flex flex-row items-center mt-2`}>
                <BiDollar className={`mr-1`} />
                <Paragraph>{formatPrize(prize)}</Paragraph>
                <Paragraph className={`text-${theme}-disabled ml-1`}>
                  {prizeUnit}
                </Paragraph>
              </span>
              <span className={`flex flex-row items-center mt-2`}>
                <BiTrophy className={`mr-1`} />
                <Paragraph>{rank}</Paragraph>
              </span>
              <span className={`flex flex-row items-center mt-2`}>
                <BiGlobeAlt className={`mr-1`} />
                <Paragraph>{region}</Paragraph>
              </span>
            </div>
          </div>
        </div>
      </Card>
    </button>
  );
};

export default LobbyCard;
