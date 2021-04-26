import React from 'react'
import { useTheme } from '../theme/theme.provider'
import { Paragraph } from './Typography';
import { FaCircle } from 'react-icons/fa';

export type status = `online` | `busy` | `in-game` | `invisible` | `offline`

export interface playerStatusProps {
    status: status;
    statusMsg?: string;
}


const PlayerStatus: React.FC<playerStatusProps> = ({status, statusMsg, ...props}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    const statusBubbleColor = (status: status): string => {
        switch(status){
            case "busy":
                return `text-${theme}-danger`
            case "online":
                return `text-${theme}-confirm`
            case "in-game":
                return `text-accent`
            case "invisible":
                return `text-${theme}-box-box3`
            default:
                return `text-${theme}-disabled`
        }
    }

    return(
        <div className={`flex flex-row`}>
            <span className={`flex items-center`}>
                <span className={`text-tny items-center ${statusBubbleColor(status)} mr-2`}><FaCircle/></span>
                <Paragraph className={statusBubbleColor(status)}>{statusMsg ? statusMsg : status}</Paragraph>
            </span>
        </div>
    )
}

export default PlayerStatus;