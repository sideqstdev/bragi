import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'
import Navbar from '../components/Navbar';
import avatar from '../../public/mismatchedsocks.jpg'
import darkLogo from '../../public/sideqst-logo-black-140.png'
import lightLogo from '../../public/sideqst-logo-white-140.png'

export default {
    title: `Navbar`,
    component: Navbar,
} as Meta;

const Template: Story<ComponentProps<typeof Navbar>> = (args) => <Navbar {...args}/>;

export const DefaultNavbar = Template.bind({});
DefaultNavbar.args = {
    loggedIn: false,
    avatar: avatar,
    logos: {
        darkLogo: darkLogo,
        lightLogo: lightLogo
    }
}