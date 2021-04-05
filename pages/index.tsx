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

export default function Home() {
  const themeCtx = useTheme()
  const theme = themeCtx.theme
  return (
    <PageLayout name={"Sideqst"}>
      <DesktopLayout
      sidebar={
        <>
          <PlayerCard avatar={`/mismatchedsocks.jpg`} username={`MismatchedSocks`} gamertag={`MismatchedSocks0`} 
          tags={[`TFT`, `Auto Chess`, `LoL`]} followers={10000} following={500} isVerified={true} 
          bio={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}/>
        </>
      }
      main={
        <>
          <LobbyCard title={"Weekly TFT Roundup"} featured date={new Date()}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `} 
          status={"open"} maxPlayers={16} currPlayers={8} prize={100} prizeUnit={"USD"} region={regions.NA} rank={ranks.any}
          user={{username: "MismatchedSocks", gamertag: `MismatchedSocks0`, avatar: `/mismatchedsocks.jpg`, verified: true}}
          onClick={() => console.log("clicked")} tags={[`Weekly`, `Teamfight Tactics`, `Sideqst`]}/>
        </>
      }/>  
    </PageLayout>
  )
}
