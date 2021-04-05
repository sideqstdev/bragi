import React from 'react'
import { useTheme } from '../theme/theme.provider'
import { Paragraph } from './Typography';

export interface playerCountProps {
    maxPlayers: number;
    currPlayers: number;
}

const PlayerCount: React.FC<playerCountProps> = ({maxPlayers=8, currPlayers=0, ...props}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    const playerCountColor = (players: number, max: number) => {
        if(players >= 0 && players < max/2){
            return `text-${theme}-text`
        }
        else if(players >= max/2 && players < max){
            return `text-warn`
        }
        else{
            return `text-${theme}-danger`
        }
    }


    return(
        <div className={`flex flex-row`}>
        <Paragraph className={`text-${theme}-disabled mr-2`}>Players:</Paragraph>
        <div className={`rounded-md bg-${theme}-background flex justify-center items-center px-4 border border-${theme}-disabled`}>
            <Paragraph className={playerCountColor(currPlayers, maxPlayers)} isBold={true}>{currPlayers}/{maxPlayers}</Paragraph>
        </div>
        </div>
    )
}

export default PlayerCount;