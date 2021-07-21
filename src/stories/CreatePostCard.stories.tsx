import React from "react";

import { Story, Meta } from "@storybook/react";
import CreatePostCard, {
  createPostCardInterface,
} from "../components/CreatePostCard";

export default {
  title: `CreatePostCard`,
  component: CreatePostCard,
} as Meta;

export const Main: Story<createPostCardInterface> = ({ ...props }) => {
  return <CreatePostCard {...props} />;
};
