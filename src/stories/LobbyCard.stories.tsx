import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'

import LobbyCard, { lobbyCardProps, regions, ranks } from '../components/LobbyCard'
import lobby from '../../public/lobbycover.jpg'

export default {
    title: `LobbyCard`,
    component: LobbyCard,
} as Meta;

const testLobby: lobbyCardProps = {
    user: {
        avatar: `https://ddragon.leagueoflegends.com/cdn/11.2.1/img/profileicon/3861.png`,
        username: `Drunkenskarl`,
        gamertag: `Drunkenskarl`,
        verified: true,
    },
    title: `Weekly TFT Roundup`,
    featured: true,
    date: new Date(),
    banner: lobby,
    description: `Our weekly TFT tournament to improve your skills and earn some money whilst doing so!`,
    status: `open`,
    maxPlayers: 16,
    currPlayers: 8,
    prize: 100,
    prizeUnit: `USD`,
    rank: ranks.any,
    region: regions.ANY,
    tags: [`Weekly`, `Teamfight Tactics`, `Sideqst`],
    onClick: () => {},
}

export const BasicLobbyCard: Story<lobbyCardProps> = ({...props}) => {
    return(
        <LobbyCard
            {...testLobby}
            {...props}
        />
    )
}