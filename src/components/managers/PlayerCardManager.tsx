import React from "react";
import { useCurrUserQuery } from "../../lib/generated";
import { useLoggedInStore } from "../../stores/storeLogin";
import PlayerCard from "../PlayerCard";

interface playerCardManagerProps {}

const PlayerCardManager: React.FC = () => {
  const { user, setUser } = useLoggedInStore();

  const { data, loading, error } = useCurrUserQuery({
    onCompleted: (data) => {
      setUser(data?.currUser);
    },
    onError: (err) => {
      // console.error(err)
    },
    fetchPolicy: `cache-and-network`,
  });

  return data.currUser && !error ? (
    <PlayerCard
      loading={loading}
      avatar={data.currUser.profile?.avatarUrl || `/mismatchedsocks.jpg`}
      username={data.currUser?.name || data.currUser?.gamerTag}
      gamertag={user.gamerTag}
      tags={[`TFT`, `Auto Chess`, `LoL`]}
      followers={10000}
      following={500}
      isVerified={true}
      bio={data.currUser.profile.bio || `No bio yet...`}
    />
  ) : null;
};

export default PlayerCardManager;
