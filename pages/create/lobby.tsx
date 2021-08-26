import { useRouter } from "next/router";
import React from "react";
import CreateLobbyCard from "../../src/components/CreateLobbyCard";
import PlayerCardManager from "../../src/components/managers/PlayerCardManager";
import PlayerList from "../../src/components/PlayerList";
import DesktopLayout from "../../src/layouts/DesktopLayout";
import PageLayout from "../../src/layouts/PageLayout";
import { players } from "../../src/lib/placeholder/users";
import { useLoggedInStore } from "../../src/stores/storeLogin";
import { useTheme } from "../../src/theme/theme.provider";

const CreateLobbyPage = () => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  const loginStore = useLoggedInStore();
  const router = useRouter();

  return (
    <PageLayout name={`Sideqst | Create Lobby`}>
      <DesktopLayout
        sidebar={
          <>
            <PlayerCardManager />
            <br />
            <PlayerList players={players} friends={players} />
          </>
        }
        main={
          <>
            <CreateLobbyCard
              onCreate={async ({
                name = ``,
                description = ``,
                rules = ``,
                coverImageUrl = ``,
              }) => {
                return true;
              }}
            />
          </>
        }
      />
    </PageLayout>
  );
};

export default CreateLobbyPage;
