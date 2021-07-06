import Head from 'next/head'
import Button from '../src/components/Button'
import { useTheme } from '../src/theme/theme.provider'
import Navbar from '../src/components/Navbar'
import Input from '../src/components/Input'
import Card from '../src/components/containers/Card'
import DesktopLayout from '../src/layouts/DesktopLayout'
import PlayerCard from '../src/components/PlayerCard'
import PageLayout from '../src/layouts/PageLayout'
import LobbyCard, { ranks, regions } from '../src/components/LobbyCard'
import { MDHeader, LGHeader } from '../src/components/Typography'
import LinkButtonGroup from '../src/components/LinkButtonGroup'
import MainManager from '../src/components/managers/MainManager'
import { useLoggedInStore } from '../src/stores/storeLogin'
import ErrorToast from '../src/components/ErrorToast'
import ErrorToastManager from '../src/components/managers/ErrorToastManager'
import LandingPageTagline from '../src/components/LandingPageTagline'
import LandingLayout from '../src/layouts/LandingLayout'
import FeaturedLobbyCard from '../src/components/FeaturedLobbyCard'
import PlayerCardManager from '../src/components/managers/PlayerCardManager'
import { useEffect } from 'react'
import { useErrorToasts } from '../src/lib/hooks/useErrorToast'

export default function Home() {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  const loginStore = useLoggedInStore();
  const {addErrorToast} = useErrorToasts()

  useEffect(() => {
    addErrorToast({
      title: `Welcome to Sideqst`,
      message: `Our site is currently in alpha but your feedback is greatly appreciated.`,
      variant: `notice`,
      type: `static`,
      customColor: `#DB2777`
    })
  }, [])

  return loginStore.loggedIn ? 
  (
    <PageLayout name={"Sideqst App"}>
      <DesktopLayout
      sidebar={
        <>
          <PlayerCardManager/>
        </>
      }
      main={
        <>
          <MainManager/>
        </>
      }/>  
    </PageLayout>
  ) 
  : 
  (
    <PageLayout name={`Sideqst | TFT`}>
      <LandingLayout
      welcome={
        <LandingPageTagline onGetStarted={() => {}}/>
      }
      featured={
        <>
          <div className={`mb-4`}>
            <MDHeader className={`border-b-2 border-${theme}-danger text-${theme}-text`}>Featured Lobbies</MDHeader>
          </div>
          <FeaturedLobbyCard banner={`./lobbycover.jpg`}
          user={{username: "MismatchedSocks", gamertag: `MismatchedSocks0`, avatar: `/mismatchedsocks.jpg`, verified: true}}
          onClick={() => console.log(`featured click`)}
          title={"Weekly TFT Roundup by Sideqst"}/>
        </>
      }/>
    </PageLayout>
  )
  
}
