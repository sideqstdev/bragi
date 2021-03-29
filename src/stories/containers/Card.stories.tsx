import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'

import Card from '../../components/containers/Card'

export default {
    title: `Card`,
    component: Card,   
} as Meta;

const Template: Story<ComponentProps<typeof Card>> = (args) => <Card {...args}/>;

export const DefaultCard = Template.bind({})
DefaultCard.args = {
    children: <>
    <h4>Default Card</h4>
    <p>This is a default card layout container component</p>
    </>
}