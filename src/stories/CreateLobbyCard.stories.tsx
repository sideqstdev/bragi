import React from "react";

import { Story, Meta } from "@storybook/react";
import CreateLobbyCard, {
  createLobbyCardInterface,
} from "../components/CreateLobbyCard";

export default {
  title: `CreateLobbyCard`,
  component: CreateLobbyCard,
} as Meta;

export const Main: Story<createLobbyCardInterface> = ({ ...props }) => {
  return <CreateLobbyCard {...props} />;
};
