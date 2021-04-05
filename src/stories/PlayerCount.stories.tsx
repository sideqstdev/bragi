import React, { ComponentProps } from 'react'

import {Story, Meta} from '@storybook/react'
import PlayerCount, { playerCountProps } from '../components/PlayerCount'

export default {
    title: `PlayerCount`,
    component: PlayerCount,
} as Meta;

const Template: Story<ComponentProps<typeof PlayerCount>> = (args: playerCountProps) => <PlayerCount {...args}/>

export const Main = Template.bind({});
Main.args = {
    maxPlayers: 16,
    currPlayers: 10
}