import { useTheme } from "../src/theme/theme.provider";
import DesktopLayout from "../src/layouts/DesktopLayout";
import PageLayout from "../src/layouts/PageLayout";
import { MDHeader, LGHeader } from "../src/components/Typography";
import MainManager from "../src/components/managers/MainManager";
import { useLoggedInStore } from "../src/stores/storeLogin";
import LandingPageTagline from "../src/components/LandingPageTagline";
import LandingLayout from "../src/layouts/LandingLayout";
import FeaturedLobbyCard from "../src/components/FeaturedLobbyCard";
import PlayerCardManager from "../src/components/managers/PlayerCardManager";
import FirstVisit from "../src/components/browser/FirstVisit";
import PlayerList from "../src/components/PlayerList";
import { players } from "../src/lib/placeholder/users";
import Dropdown from "../src/components/Dropdown";
import { FaPlus } from "react-icons/fa";
import Button from "../src/components/Button";

export default function Home() {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  const loginStore = useLoggedInStore();

  return loginStore.loggedIn ? (
    <PageLayout name={"Sideqst App"}>
      <DesktopLayout
        sidebar={
          <>
            <PlayerCardManager />
            <br />
            <PlayerList players={players} friends={[]} />
          </>
        }
        main={
          <>
            <MainManager />
          </>
        }
      />
    </PageLayout>
  ) : (
    <PageLayout name={`Sideqst | TFT`}>
      <FirstVisit />
      <LandingLayout
        welcome={<LandingPageTagline onGetStarted={() => {}} />}
        featured={
          <>
            <div className={`mb-4`}>
              <MDHeader
                className={`border-b-2 border-${theme}-danger text-${theme}-text`}
              >
                Featured Lobbies
              </MDHeader>
            </div>
            <FeaturedLobbyCard
              banner={`./lobbycover.jpg`}
              user={{
                username: "MismatchedSocks",
                gamertag: `MismatchedSocks0`,
                avatar: `/mismatchedsocks.jpg`,
                verified: true,
              }}
              onClick={() => console.log(`featured click`)}
              title={"Weekly TFT Roundup by Sideqst"}
            />
          </>
        }
      />
    </PageLayout>
  );
}
