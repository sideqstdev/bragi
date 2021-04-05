import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'
import StatusButton, { statusProps } from '../components/StatusButton'

export default {
    title: `StatusButton`,
    component: StatusButton,
} as Meta;

const Template: Story<ComponentProps<typeof StatusButton>> = (args: statusProps) => <StatusButton {...args}/>;

export const Status = Template.bind({});
Status.args = {
    status: "open"
}