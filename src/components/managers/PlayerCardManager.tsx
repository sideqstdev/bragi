import React from 'react';
import { useCurrUserQuery } from '../../lib/generated';
import { useLoggedInStore } from '../../stores/storeLogin';
import PlayerCard from '../PlayerCard';

interface playerCardManagerProps {}

const PlayerCardManager: React.FC = () => {
    const {user} = useLoggedInStore()
    
    return(
        <PlayerCard avatar={user?.profile?.avatarUrl || `/mismatchedsocks.jpg`} username={user?.name || user.gamerTag} gamertag={user.gamerTag} 
          tags={[`TFT`, `Auto Chess`, `LoL`]} followers={10000} following={500} isVerified={true} 
          bio={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}/>
    )
}

export default PlayerCardManager;