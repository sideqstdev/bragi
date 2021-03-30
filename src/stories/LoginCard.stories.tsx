import React from 'react'

import {Story, Meta} from '@storybook/react'
import LoginCard, {loginCardProps} from '../components/LoginCard'

export default {
    title: `LoginCard`,
    component: LoginCard,
} as Meta;

export const Main: Story<loginCardProps> = ({...props}) => {
    return(
        <LoginCard {...props}/>
    )
}