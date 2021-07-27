import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import AccountDropdown, {
  accountDropdownProps,
} from "../components/AccountDropdown";
import { BsFillGearFill } from "react-icons/bs";
import { BiBug, BiTrophy, BiUser } from "react-icons/bi";

export default {
  title: `AccountDropdown`,
  component: AccountDropdown,
  argTypes: {},
} as Meta;

let options: accountDropdownProps = {
  open: true,
  status: `busy`,
  statusMsg: `Status`,
  items: [
    { icon: <BiUser />, name: `Profile`, link: `/profile` },
    { icon: <BiTrophy />, name: `My Lobbies`, link: `/profile/lobbies` },
    { icon: <BsFillGearFill />, name: `Settings`, link: `/settings` },
    { icon: <BiBug />, name: `Report a bug`, link: `/profile` },
  ],
  onLogout: () => {
    console.log("Logged out");
  },
};

export const AccountDropdownEx: Story<accountDropdownProps> = ({
  ...props
}) => {
  return (
    <div>
      <AccountDropdown {...props} {...options} />
    </div>
  );
};
