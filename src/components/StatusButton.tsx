import React from 'react';
import { useTheme } from '../theme/theme.provider';
import { XSHeader, Paragraph } from './Typography';

export interface statusProps {
    status?: "open" | "closed" | "inprogress" | "finished";
}

const StatusButton: React.FC<statusProps> = ({children, status="finished", ...props}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    const statusColors = {
        open: `text-${theme}-confirm border-${theme}-confirm`,
        closed: `text-${theme}-danger border-${theme}-danger`,
        inprogress: `text-accent border-accent`,
        finished: `text-${theme}-box-box4 border-${theme}-box-box4`
    }

    let statusText;

    switch(status){
        case "open":
            statusText = `Open`
            break
        case "closed":
            statusText = `Closed`
            break
        case "inprogress":
            statusText = `In-Progress`
            break
        case "finished":
            statusText = `Finished`
            break
        default:
            statusText = `Finished`
            break
    }

    return(
        <div className={`${statusColors[status]} border rounded-md bg-${theme}-background flex justify-center items-center px-4`}>
            <Paragraph isBold={true} className={`${statusColors}`}>{statusText}</Paragraph>
        </div>
    )
}

export default StatusButton