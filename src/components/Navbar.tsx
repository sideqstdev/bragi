import React, { useState } from "react";
import { useTheme } from "../theme/theme.provider";
import Button from "./Button";
import { Avatar } from "./Avatar";
import { FiSun } from "react-icons/fi";
import Input from "./Input";
import LogoBlock from "./LogoBlock";
import { useRouter } from "next/router";
import AccountDropdownManager from "./managers/AccountDropdownManager";
import Dropdown from "./Dropdown";
import { useLoggedInStore } from "../stores/storeLogin";
import { BsFillGearFill } from "react-icons/bs";
import { MdVideogameAsset } from "react-icons/md";
import CreatePostCardManager from "./managers/CreatePostCardManager";
import {
  BiBell,
  BiBug,
  BiLogOut,
  BiPaperPlane,
  BiPlus,
  BiSearch,
  BiSun,
  BiTrophy,
  BiUser,
} from "react-icons/bi";

export type logoTuple = {
  darkLogo: string;
  lightLogo: string;
};

export interface navProps {
  loggedIn?: boolean;
  avatar?: string;
  logos?: logoTuple;
  onLogout: () => void;
}

const Navbar: React.FC<navProps> = ({
  loggedIn,
  avatar = "/mismatchedsocks.jpg",
  logos,
  onLogout,
  ...props
}: navProps) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  const router = useRouter();
  const { logout } = useLoggedInStore();
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const routeHome = () => {
    router.push(`/`);
  };

  const routeLogin = () => {
    router.push(`/login`);
  };

  const routeLogout = () => {
    logout();
    router.push(`/`);
  };

  const routeRegister = () => {
    router.push(`/register`);
  };

  // checks the logged in prop and renders the appropriate r-block
  const loggedInRender = () => {
    if (loggedIn) {
      return (
        <>
          <span className={`cursor-pointer flex content-center items-center`}>
            <Dropdown
              items={[
                {
                  icon: <BiUser />,
                  name: `Profile`,
                  onClick: () => router.push(`/profile`),
                },
                {
                  icon: <BiTrophy />,
                  name: `My Lobbies`,
                  onClick: () => router.push(`/profile/lobbies`),
                },
                {
                  icon: <BsFillGearFill />,
                  name: `Settings`,
                  onClick: () => router.push(`/settings`),
                },
                {
                  icon: <BiBug />,
                  name: `Report a bug`,
                  onClick: () => router.push(`/bugReport`),
                },
                {
                  icon: <BiLogOut />,
                  name: `Logout`,
                  isAction: true,
                  onClick: onLogout,
                },
              ]}
              anchor={<Avatar src={avatar}></Avatar>}
            />
          </span>
          <div className={`flex flex-row-reverse content-center mr-4`}>
            <Dropdown
              items={[
                {
                  icon: <BiPaperPlane />,
                  name: `Create Post`,
                  onClick: () => openDialog(),
                },
                {
                  icon: <MdVideogameAsset />,
                  name: `Create Lobby`,
                  onClick: () => router.push(`/create/lobby`),
                },
              ]}
              anchor={
                <Button
                  variant={"primary"}
                  size={"small"}
                  iconRight={<BiPlus />}
                >
                  Create
                </Button>
              }
            />
            <Dropdown
              items={[
                {
                  icon: <BiSun />,
                  name: `A Notification`,
                  onClick: () => console.log(`Notification`),
                },
              ]}
              anchor={
                <Button variant={"icon"}>
                  <BiBell />
                </Button>
              }
            />

            <Button onClick={themeCtx.toggleTheme} variant={"icon"}>
              <FiSun className={`text-dark-danger-hover`} />
            </Button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={`flex flex-row-reverse content-center`}>
            <Button onClick={routeLogin} variant={"primary"}>
              Login
            </Button>
            <Button onClick={routeRegister} variant={"text"}>
              Register
            </Button>
            <Button onClick={themeCtx.toggleTheme} variant={"icon"}>
              <FiSun className={`text-dark-danger-hover`} />
            </Button>
          </div>
        </>
      );
    }
  };

  return (
    <div
      className={`bg-${theme}-altbackground text-${theme}-text w-full px-6 lg:px-6 pb-3 pt-3 inline-grid grid-cols-10`}
    >
      <div
        className={`flex items-center order-1 flex-row md:order-1 col-span-4 sm:col-span-4 lg:col-span-3 mr-4`}
      >
        <LogoBlock
          onClick={routeHome}
          lightLogo={logos ? logos.lightLogo : undefined}
          darkLogo={logos ? logos.darkLogo : undefined}
        />
      </div>

      <div
        className={`flex items-center order-last mt-3 sm:mt-3 lg:mt-0 sm:order-last lg:order-2 col-span-10 w-full sm:col-8 lg:col-span-4`}
      >
        <Input
          autoComplete={`off`}
          iconLeft={<BiSearch />}
          placeholder={`Tournament Search`}
          stretch={true}
        ></Input>
      </div>

      <nav
        className={`flex flex-row-reverse order-2 sm:order-3 col-span-6 content-center items-center sm:col-span-6 md:col-span-6 lg:col-span-3 ml-4`}
      >
        {loggedInRender()}
      </nav>
      <CreatePostCardManager
        closeDialog={closeDialog}
        dialogOpen={dialogOpen}
      />
    </div>
  );
};

export default Navbar;
