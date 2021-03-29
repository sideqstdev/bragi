import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'
import { XXLHeader, XLHeader, LGHeader, MDHeader, SMHeader, XSHeader, Paragraph, SMParagraph } from '../components/Typography';

export default {
    title: `Typography`,
} as Meta;

const XXLTemplate: Story<ComponentProps<typeof XXLHeader>> = (args) => <XXLHeader {...args}/>;

export const XXL_Header = XXLTemplate.bind({});
XXL_Header.args = {
    children: `Heading XXL`
}

const XLTemplate: Story<ComponentProps<typeof XLHeader>> = (args) => <XLHeader {...args}/>;

export const XL_Header = XLTemplate.bind({});
XL_Header.args = {
    children: `Heading XL`
}

const LGTemplate: Story<ComponentProps<typeof LGHeader>> = (args) => <LGHeader {...args}/>;

export const LG_Header = LGTemplate.bind({});
LG_Header.args = {
    children: `Heading LG`
}

const MDTemplate: Story<ComponentProps<typeof MDHeader>> = (args) => <MDHeader {...args}/>;

export const MD_Header = MDTemplate.bind({});
MD_Header.args = {
    children: `Heading MD`
}
