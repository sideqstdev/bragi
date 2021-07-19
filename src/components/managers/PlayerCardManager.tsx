import React from "react";
import { useCurrUserQuery } from "../../lib/generated";
import { useLoggedInStore } from "../../stores/storeLogin";
import Card from "../containers/Card";
import PlayerCard from "../PlayerCard";
import { Spinner } from "../Spinner";

interface playerCardManagerProps {}

const PlayerCardManager: React.FC = () => {
  const { user, setUser } = useLoggedInStore();

  const { data, loading, error, startPolling, stopPolling } = useCurrUserQuery({
    onCompleted: (data) => {
      setUser(data?.currUser);
    },
    onError: (err) => {
      console.error(err);
    },
    fetchPolicy: `cache-and-network`,
  });

  if (error) {
    return (
      <Card className={`px-3 py-3 h-32 flex items-center justify-center`}>
        <Spinner size={`6`} />
      </Card>
    );
  }

  return (
    <PlayerCard
      loading={loading}
      avatar={data?.currUser?.profile?.avatarUrl || `/mismatchedsocks.jpg`}
      username={data?.currUser?.name || data?.currUser?.gamerTag}
      gamertag={user?.gamerTag}
      tags={
        data?.currUser.profile?.tags
          ? data?.currUser?.profile?.tags
          : [`TFT`, `Auto Chess`, `LoL`]
      }
      followers={10000}
      following={500}
      isVerified={true}
      bio={data?.currUser?.profile?.bio || `No bio yet...`}
    />
  );
};

export default PlayerCardManager;
