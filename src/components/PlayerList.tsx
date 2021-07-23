import React from "react";
import { FaSearch } from "react-icons/fa";
import { User } from "../lib/generated";
import { useTheme } from "../theme/theme.provider";
import Button from "./Button";
import Card from "./containers/Card";
import Emoji from "./Emoji";
import Input from "./Input";
import ListHeader from "./ListHeader";
import PlayerStatus from "./PlayerStatus";
import PlayerTag from "./PlayerTag";
import { Spinner } from "./Spinner";
import { MDHeader, SMParagraph } from "./Typography";

export interface playerListProps {
  friends?: User[];
  players?: User[];
  friendsLoading?: boolean;
  playersLoading?: boolean;
  addFriend?: (gamerTag: string) => void;
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
      <ListHeader title={`Friends`} length={friends?.length || 0} />
      {friendsLoading ? (
        <div className={`p-4`}>
          <Spinner size={`4`} />
        </div>
      ) : (
        <div>
          {friends.length < 1 ? (
            <div
              className={`p-4 flex justify-center bg-${theme}-box-box2 rounded-md`}
            >
              <SMParagraph>
                No friends yet <Emoji label={`sadface`} symbol={`😢`} /> ...
              </SMParagraph>
            </div>
          ) : (
            friends.map((friend, i) => {
              return (
                <div key={i} className={`my-2`}>
                  <PlayerTag
                    username={friend.name}
                    gamertag={friend.gamerTag}
                    avatar={friend.profile.avatarUrl}
                    rightContent={
                      <PlayerStatus status={friend.profile.status} />
                    }
                  />
                </div>
              );
            })
          )}
          {friends.length >= 10 && (
            <a onClick={showMoreFriends}>
              <SMParagraph
                className={`hover:text-${theme}-default-hover cursor-pointer`}
              >
                Show More...
              </SMParagraph>
            </a>
          )}
        </div>
      )}

      <ListHeader title={`Players`} length={players?.length || 0} />
      {playersLoading ? (
        <div className={`p-4`}>
          <Spinner size={`4`} />
        </div>
      ) : (
        <div>
          {players.length < 1 ? (
            <div
              className={`p-4 flex justify-center bg-${theme}-box-box2 rounded-md`}
            >
              <SMParagraph>
                No players yet <Emoji label={`sadface`} symbol={`😢`} /> ...
              </SMParagraph>
            </div>
          ) : (
            players.map((player, i) => {
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
            })
          )}
        </div>
      )}
    </Card>
  );
};

export default PlayerList;
