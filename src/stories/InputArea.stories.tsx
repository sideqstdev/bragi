import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'
import InputArea, { inputAreaProps } from '../components/InputArea'

export default {
    title: `InputArea`,
    component: InputArea,
} as Meta;

const Template: Story<ComponentProps<typeof InputArea>> = (args: inputAreaProps) => <InputArea {...args}/>;

export const DefaultTextArea = Template.bind({});

DefaultTextArea.args = {
    placeholder: `Input Area default`
}

export const AltTextArea = Template.bind({});

AltTextArea.args = {
    placeholder: `Input Area alt`,
    variant: `alt`
}

export const SmallTextArea = Template.bind({});

SmallTextArea.args = {
    placeholder: `Input Area small`,
    scale: `small`,
}

export const LargeTextArea = Template.bind({});

LargeTextArea.args = {
    placeholder: `Input Area large`,
    scale: `large`,
}

export const StretchedTextArea = Template.bind({});

StretchedTextArea.args = {
    placeholder: `Input Area stretched`,
    stretch: true,
}

export const LabeledTextArea = Template.bind({});

LabeledTextArea.args = {
    placeholder: `Input Area labeled`,
    label: `Label`
}

export const ErrorTextArea = Template.bind({});

ErrorTextArea.args = {
    placeholder: `Input Area error`,
    error: `error`
}

export const LabeledErrorTextArea = Template.bind({});

LabeledErrorTextArea.args = {
    placeholder: `Input Area labeled error`,
    label: `Label`,
    error: `error`
}