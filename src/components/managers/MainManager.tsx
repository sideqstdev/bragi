import React from 'react';
import { useTheme } from '../../theme/theme.provider';
import LinkButtonGroup, { pageLink } from '../LinkButtonGroup';
import LobbyCard, { regions, ranks } from '../LobbyCard';
import {useMainTabStore} from '../../stores/storeMainTab'

const MainManager: React.FC = () => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;
    const tab = useMainTabStore()

    const selectionCallback = (selection: pageLink) => {
        tab.setTab(selection.index)
    }

    return(
        <>
            <LinkButtonGroup
                links={[
                    {link: `lobbies`, title: `Lobbies`},
                    {link: `posts`, title: `Posts`}
                ]}
                selected={tab.tab}
                selectionCallback={selectionCallback}
            />
            <div className={`mb-6 mt-4`}>
                <div className={`pb-4`}>
                <LobbyCard title={"Weekly TFT Roundup"} featured date={new Date()}
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `} 
                status={"open"} maxPlayers={16} currPlayers={8} prize={100} prizeUnit={"USD"} region={regions.NA} rank={ranks.any}
                user={{username: "MismatchedSocks", gamertag: `MismatchedSocks0`, avatar: `/mismatchedsocks.jpg`, verified: true}}
                onClick={() => console.log("clicked")} tags={[`Weekly`, `Teamfight Tactics`, `Sideqst`]}/>
                </div>
            </div>
        </>
    )
}

export default MainManager