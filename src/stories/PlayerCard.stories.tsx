import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'

import PlayerCard, {playerCardProps} from '../components/PlayerCard'
import avatar from '../../public/mismatchedsocks.jpg'

export default {
    title: `PlayerCard`,
    component: PlayerCard,
} as Meta;

const testUser: playerCardProps = {
    avatar: avatar,
    username: `Mismatched Socks`,
    gamertag: `MismatchedSocks0`,
    bio: `TFT player @Beastcoast . Rank 1&2 for multiple sets. My goal is to try to help the community improve.`,
    followers: 5114,
    following: 86,
    isVerified: true,
    tags: [`TFT`, `Streaming`, `Rank 1`]
}

export const Main: Story<playerCardProps> = ({...props}) => {
    return(
        <PlayerCard
            {...props}
            {...testUser}
        />
    )
}

Main.bind({})