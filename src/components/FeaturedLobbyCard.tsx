import React from 'react';
import { formatDate } from '../lib/util/time-utils';
import { useTheme } from '../theme/theme.provider';
import Button from './Button';
import Card from './containers/Card';
import LobbyCard, { lobbyUser } from './LobbyCard';
import PlayerTag from './PlayerTag';
import { MDHeader, Paragraph } from './Typography';

export interface featuredLobbyCardProps {
    user: lobbyUser;
    title: string;
    date?: Date;
    banner: string;
    onClick: () => void;
}

const FeaturedLobbyCard: React.FC<featuredLobbyCardProps> = ({onClick, banner, date=new Date(), title, user, ...props}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return(
        <Card className={`w-full relative`}>
            {banner ? (
                <div className={`w-full relative`}>
                    <img src={banner} className={`w-full h-64 object-cover rounded-t-md`}/>
                    <div className={`absolute right-2 bottom-3`}>
                        <Button variant={`confirm`} size={`large`}>Join</Button>
                    </div>
                </div>
            ) : null}
            <div className={`flex flex-col md:flex-row justify-between p-4 text-left`}>
                <div className={`mb-4 md:mb-0`}>
                    <MDHeader>{title}</MDHeader>
                    <Paragraph isBold={true} className={`text-${theme}-confirm mt-1`}>{formatDate(date)}</Paragraph>
                </div>
                <div className={`flex items-center`}>
                    <PlayerTag {...user}/>
                </div>
            </div>
        </Card>
    )
}

export default FeaturedLobbyCard;