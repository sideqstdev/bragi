import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import PlayerList, { playerListProps } from "../components/PlayerList";
import { players } from "../lib/placeholder/users";

export default {
  title: `PlayerList`,
  component: PlayerList,
  argTypes: {},
} as Meta;

export const DefaultPlayerList: Story<playerListProps> = ({ ...props }) => {
  return <PlayerList {...props} players={players} friends={players} />;
};

export const LoadingPlayerList: Story<playerListProps> = ({ ...props }) => {
  return (
    <PlayerList
      {...props}
      players={players}
      friends={players}
      playersLoading={true}
      friendsLoading={true}
    />
  );
};

export const NullPlayerList: Story<playerListProps> = ({ ...props }) => {
  return (
    <PlayerList
      {...props}
      players={null}
      friends={null}
      playersLoading={true}
      friendsLoading={true}
    />
  );
};
