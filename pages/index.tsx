import Head from 'next/head'
import Button from '../src/components/Button'
import { useTheme } from '../src/theme/theme.provider'
import Navbar from '../src/components/Navbar'
import Input from '../src/components/Input'
import Card from '../src/components/containers/Card'
import DesktopLayout from '../src/layouts/DesktopLayout'
import PlayerCard from '../src/components/PlayerCard'
import PageLayout from '../src/layouts/PageLayout'


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
          <Card className={`mb-2`}>
            <Input placeholder={"Input"}/>
          </Card>
          <Card>
            <h4>Card</h4>
            <p>This is a card</p>
            <p>Hello again</p>
          </Card>
        </>
      }/>  
    </PageLayout>
  )
}
