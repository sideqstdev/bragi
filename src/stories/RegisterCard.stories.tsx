import React from 'react'

import {Story, Meta} from '@storybook/react'
import RegisterCard, {registerCardProps} from '../components/RegisterCard';

export default {
    title: `RegisterCard`,
    component: RegisterCard,
} as Meta;

export const Main: Story<registerCardProps> = ({...props}) => {
    return(
        <RegisterCard {...props}/>
    )
}