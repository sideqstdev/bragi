import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Tag from "../components/Tag";
import { FaChessBishop } from "react-icons/fa";

export default {
  title: `Tag`,
  component: Tag,
} as Meta;

const Template: Story<ComponentProps<typeof Tag>> = (args) => <Tag {...args} />;

export const DefaultTag = Template.bind({});
DefaultTag.args = {
  children: `TFT`,
};

export const LeftIconTag = Template.bind({});
LeftIconTag.args = {
  children: `Chess`,
  iconLeft: <FaChessBishop />,
};

export const RightIconTag = Template.bind({});
RightIconTag.args = {
  children: `Chess`,
  iconRight: <FaChessBishop />,
};

export const GlowingTag = Template.bind({});
GlowingTag.args = {
  children: `LoL`,
  glow: true,
};
