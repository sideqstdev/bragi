import React from "react";
import { FaSearch } from "react-icons/fa";
import { User } from "../lib/generated";
import { useTheme } from "../theme/theme.provider";
import Button from "./Button";
import Card from "./containers/Card";
import Input from "./Input";
import ListHeader from "./ListHeader";
import PlayerStatus from "./PlayerStatus";
import PlayerTag from "./PlayerTag";
import { MDHeader, SMParagraph } from "./Typography";

export interface playerListProps {
  friends?: User[];
  players?: User[];
  friendsLoading?: boolean;
  playersLoading?: boolean;
  addFriend?: () => void;
  showMoreFriends?: () => User[];
}

const PlayerList: React.FC<playerListProps> = ({
  friends = [],
  friendsLoading = false,
  playersLoading = false,
  players = [],
  addFriend,
  showMoreFriends,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  return (
    <Card className={`p-3`}>
      <MDHeader className={`mb-2`}>Players</MDHeader>
      <Input
        iconLeft={<FaSearch />}
        placeholder={`Search for players`}
        stretch={true}
      />
      <ListHeader title={`Friends`} length={10} />
      <div>
        {friends.map((friend, i) => {
          return (
            <div key={i} className={`my-2`}>
              <PlayerTag
                username={friend.name}
                gamertag={friend.gamerTag}
                avatar={friend.profile.avatarUrl}
                rightContent={<PlayerStatus status={friend.profile.status} />}
              />
            </div>
          );
        })}
        <a onClick={showMoreFriends}>
          <SMParagraph
            className={`hover:text-${theme}-default-hover cursor-pointer`}
          >
            Show More...
          </SMParagraph>
        </a>
      </div>
      <ListHeader title={`Players`} length={100} />
      <div>
        {players.map((player, i) => {
          return (
            <div key={i} className={`my-2`}>
              <PlayerTag
                username={player.name}
                gamertag={player.gamerTag}
                avatar={player.profile.avatarUrl}
                verified={player.verified}
                rightContent={
                  <Button
                    variant={`primary`}
                    size={`small`}
                    onClick={addFriend}
                  >
                    Add Friend
                  </Button>
                }
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default PlayerList;
