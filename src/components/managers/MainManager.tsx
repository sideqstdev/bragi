import React from "react";
import { useTheme } from "../../theme/theme.provider";
import LinkButtonGroup, { pageLink } from "../LinkButtonGroup";
import LobbyCard, { regions, ranks } from "../LobbyCard";
import { useMainTabStore } from "../../stores/storeMainTab";
import PostCard from "../PostCard";
import { Paragraph } from "../Typography";
import PostCardManager from "./PostCardManager";

const MainManager: React.FC = () => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  const tab = useMainTabStore();

  const selectionCallback = (selection: pageLink) => {
    tab.setTab(selection.index);
  };

  const tabRender = () => {
    if (tab.tab === 0) {
      return (
        <div className={`mb-6 mt-4`}>
          <div className={`pb-4`}>
            <LobbyCard
              title={"Weekly TFT Roundup"}
              featured
              date={new Date()}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
              status={"open"}
              maxPlayers={16}
              currPlayers={8}
              prize={100}
              prizeUnit={"USD"}
              region={regions.NA}
              rank={ranks.any}
              user={{
                username: "MismatchedSocks",
                gamertag: `MismatchedSocks0`,
                avatar: `/mismatchedsocks.jpg`,
                verified: true,
              }}
              onClick={() => console.log("clicked")}
              tags={[`Weekly`, `Teamfight Tactics`, `Sideqst`]}
            />
          </div>
          <div className={`pb-4`}>
            <LobbyCard
              title={"common.gg PBE Tournament"}
              date={new Date()}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
              status={"open"}
              maxPlayers={32}
              currPlayers={32}
              prize={500}
              prizeUnit={"USD"}
              region={regions.NA}
              rank={ranks.any}
              user={{
                username: "common.gg",
                gamertag: `commongg`,
                avatar: `/common.jpg`,
                verified: true,
              }}
              onClick={() => console.log("clicked")}
              tags={[`Weekly`, `Teamfight Tactics`, `Sideqst`]}
              banner={`/common_banner.jpeg`}
            />
          </div>
        </div>
      );
    }
    if (tab.tab === 1) {
      return (
        <div className={`mb-6 mt-4`}>
          <PostCardManager />
        </div>
      );
    } else {
      return <Paragraph>Nothing here... 😢</Paragraph>;
    }
  };

  return (
    <>
      <LinkButtonGroup
        links={[
          { link: `lobbies`, title: `Lobbies` },
          { link: `posts`, title: `Posts` },
        ]}
        selected={tab.tab}
        selectionCallback={selectionCallback}
      />
      {tabRender()}
    </>
  );
};

export default MainManager;
