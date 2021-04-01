import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'

import Button, {buttonProps} from '../components/Button'

export default {
    title: `Button`,
    component: Button,
    argTypes: {
        backgroundColor: {control: `color`}
    }
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args}/>;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    children: `Default`,
}

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    variant: `primary`,
    size: `default`,
    children: `Primary`,
}

export const ConfirmButton = Template.bind({});
ConfirmButton.args = {
    variant: `confirm`,
    size: `default`,
    children: `Confirm`
}

export const DangerButton = Template.bind({});
DangerButton.args = {
    variant: `danger`,
    size: `default`,
    children: `Danger`
}

export const TextButton = Template.bind({});
TextButton.args = {
    variant: `text`,
    size: `default`,
    children: `Text`
}

export const SmallButton = Template.bind({});
SmallButton.args = {
    size: `small`,
    children: `Small`
}

export const LargeButton = Template.bind({});
LargeButton.args = {
    size: `large`,
    children: `Large`
}

export const StretchedButton = Template.bind({});
StretchedButton.args = {
    variant: `primary`,
    children: `Stretched`,
    stretch: true,
}

export const LoadingButton = Template.bind({});
LoadingButton.args = {
    variant: `primary`,
    children: `Loading`,
    loading: true,
}