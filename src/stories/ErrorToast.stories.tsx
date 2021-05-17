import React, { ComponentProps } from 'react';

import {Story, Meta} from '@storybook/react'
import ErrorToast, { errorToastProps } from '../components/ErrorToast';

export default {
    title: `ErrorToast`,
    components: ErrorToast,
    argTypes: {
    }
} as Meta;

const Template: Story<ComponentProps<typeof ErrorToast>> = (args: errorToastProps) => <ErrorToast {...args}/>;

export const WarnErrorToast = Template.bind({})
WarnErrorToast.args = {
    message: `Warning Message`,
    duration: 7000,
    variant: `warning`
}

export const InfoErrorToast = Template.bind({})
InfoErrorToast.args = {
    message: `Info Message`,
    duration: 7000,
    variant: `info`
}

export const DangerErrorToast = Template.bind({})
DangerErrorToast.args = {
    message: `Danger Message`,
    duration: 7000,
    variant: `danger`,
}

export const NoticeErrorToast = Template.bind({})
NoticeErrorToast.args = {
    message: `Notice Message`,
    duration: 7000,
    variant: `notice`
}