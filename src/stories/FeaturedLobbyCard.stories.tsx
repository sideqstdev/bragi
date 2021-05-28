import React from 'react';
import {Story, Meta} from '@storybook/react';

import lobby from '../../public/lobbycover.jpg'
import FeaturedLobbyCard, { featuredLobbyCardProps } from '../components/FeaturedLobbyCard';

export default {
    title: `FeaturedLobbyCard`,
    component: FeaturedLobbyCard,
    argTypes: {},
} as Meta;

const testFeaturedLobby: featuredLobbyCardProps = {
    user: {
        avatar: `https://ddragon.leagueoflegends.com/cdn/11.2.1/img/profileicon/3861.png`,
        username: `Drunkenskarl`,
        gamertag: `Drunkenskarl`,
        verified: true,
    },
    title: `Weekly TFT Roundup by Sideqst`,
    date: new Date(),
    banner: lobby,
    onClick: () => {},
}

export const BasicFeaturedLobbyCard: Story<featuredLobbyCardProps> = ({...props}) => {
    return(
        <FeaturedLobbyCard {...testFeaturedLobby} {...props}/>
    )
}
