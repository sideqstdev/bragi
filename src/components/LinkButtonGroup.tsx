import React from 'react';
import { useTheme } from '../theme/theme.provider';
import { MDHeader } from './Typography';

export type pageLink = {
    link: string;
    title: string;
    index?: number;
}

export interface linkButtonGroupProps {
    links: pageLink[];
    selected?: number
    selectionCallback: (selected: pageLink) => void
}

const LinkButtonGroup: React.FC<linkButtonGroupProps> = ({links, selected=0, selectionCallback, ...props}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme

    const renderLinks = () => {
        return links.map((link, index) => {
            return (
                <span onClick={() => selectionCallback({...link, index: index})} className={`mr-8 pr-2 cursor-pointer text-left hover:text-${theme}-danger-hover ${selected === index ? `border-b-2 border-dark-danger` : ``}`}>
                    <MDHeader>{link.title}</MDHeader>
                </span>
            )
        })
    }

    return (
        <div className={`flex flex-row w-full`}>
            {renderLinks()}
        </div>
    )
}

export default LinkButtonGroup