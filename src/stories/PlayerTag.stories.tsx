import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'
import PlayerTag, { playerTagProps } from '../components/PlayerTag'
import avatar from '../../public/mismatchedsocks.jpg'

export default {
    title: `PlayerTag`,
    component: PlayerTag,
} as Meta

const Template: Story<ComponentProps<typeof PlayerTag>> = (args: playerTagProps) => <PlayerTag {...args}/>

export const DefaultPlayerTag = Template.bind({});
DefaultPlayerTag.args = {
    avatar: avatar,
    username: `MismatchedSocks`,
    gamertag: `MismatchedSocks0`,
    verified: true,
}