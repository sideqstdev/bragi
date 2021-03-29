import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'

import Input, { inputProps } from '../components/Input'
import { FaDollarSign, FaSearch } from 'react-icons/fa';

export default {
    title: `Input`,
    component: Input,
} as Meta;

const Template: Story<ComponentProps<typeof Input>> = (args: inputProps) => <Input {...args}/>;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
    placeholder: `Input default`
}

export const AltInput = Template.bind({});
AltInput.args = {
    placeholder: `Input alt`,
    variant: `alt`,
}

export const SmallInput = Template.bind({});
SmallInput.args = {
    placeholder: `Input small`,
    scale: `small`,
}

export const LargeInput = Template.bind({});
LargeInput.args = {
    placeholder: `Input large`,
    scale: `large`,
}

export const StretchedInput = Template.bind({});
StretchedInput.args = {
    stretch: true,
    placeholder: `Input stretched`
}

export const LeftIconInput = Template.bind({});
LeftIconInput.args = {
    placeholder: `Input with l-icon`,
    iconLeft: <FaSearch/>,
}

export const RightIconInput = Template.bind({});
RightIconInput.args = {
    placeholder: `Input with r-icon`,
    iconRight: <FaDollarSign/>,
}

export const LabeledInput = Template.bind({});
LabeledInput.args = {
    placeholder: `Input labeled`,
    label: `Label`
}