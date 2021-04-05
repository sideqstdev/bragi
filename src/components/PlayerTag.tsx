import React from 'react';
import { useTheme } from '../theme/theme.provider';
import { Avatar } from './Avatar';
import { Paragraph, SMParagraph } from './Typography';
import { FaCheckCircle } from 'react-icons/fa';

export interface playerTagProps {
    avatar: string,
    username: string;
    gamertag: string;
    verified?: boolean
}

const PlayerTag: React.FC<playerTagProps> = ({avatar, username, verified=false, gamertag}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return(
        <div className={`flex flex-row`}>
            <Avatar src={avatar} size={"default"}/>
            <div className={`flex flex-col ml-2`}>
                <Paragraph className={`flex flex-row text-${theme}-text`} isBold={true}>{username} {verified ? 
                (<span className={`ml-1 flex items-center`}>
                    <FaCheckCircle className={`text-accent text-xxs`}/>
                </span>) : null}</Paragraph>
                <SMParagraph className={`text-${theme}-disabled`}>{`@${gamertag}`}</SMParagraph>
            </div>
        </div>
    )
}

export default PlayerTag;