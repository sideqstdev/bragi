import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'
import Status, { playerStatusProps } from '../components/PlayerStatus'
import PlayerStatus from '../components/PlayerStatus';

export default {
    title: `PlayerStatus`,
    component: Status,
} as Meta;

export const DefaultPlayerStatus: Story<playerStatusProps> = ({...props}) => {
    return(
        <PlayerStatus status={`online`} {...props}/>
    )
}