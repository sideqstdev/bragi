import React from "react";
import PlayerCardManager from "../src/components/managers/PlayerCardManager";
import PlayerList from "../src/components/PlayerList";
import { LGHeader } from "../src/components/Typography";
import DesktopLayout from "../src/layouts/DesktopLayout";
import PageLayout from "../src/layouts/PageLayout";
import { players } from "../src/lib/placeholder/users";

const SettingsPage = () => {
  return (
    <PageLayout name={`Sideqst | Settings`}>
      <DesktopLayout
        sidebar={
          <>
            <PlayerCardManager />
            <br />
            <PlayerList players={players} friends={players} />
          </>
        }
        main={
          <div>
            <LGHeader>Settings</LGHeader>
          </div>
        }
      />
    </PageLayout>
  );
};

export default SettingsPage;
