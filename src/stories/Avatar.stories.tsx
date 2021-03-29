import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'
import avatar from '../../public/mismatchedsocks.jpg'

import {Avatar} from '../components/Avatar'

export default {
    title: `Avatar`,
    component: Avatar,
} as Meta;

const Template: Story<ComponentProps<typeof Avatar>> = (args) => <Avatar {...args}/>;

export const XXSAvatar = Template.bind({});
XXSAvatar.args = {
    src: avatar,
    size: 'xxs'
}

export const XSAvatar = Template.bind({});
XSAvatar.args = {
    src: avatar,
    size: 'xs'
}

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
    src: avatar,
    size: 'sm'
}

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
    src: avatar,
}

export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
    src: avatar,
    size: `lg`
}

export const XLAvatar = Template.bind({});
XLAvatar.args = {
    src: avatar,
    size: `xl`
}

export const XXLAvatar = Template.bind({});
XXLAvatar.args = {
    src: avatar,
    size: `xxl`
}

