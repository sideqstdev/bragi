import React from "react";
import cookieCutter from "cookie-cutter";
import { useLogoutMutation, useRefreshTokenQuery } from "../../lib/generated";
import { useLoggedInStore } from "../../stores/storeLogin";
import { useRouter } from "next/router";
import { devMode } from "../../lib/constants";

const AuthManager: React.FC = () => {
  const {
    setUser,
    login,
    logout,
    refreshToken,
    accessToken,
    setTokens,
  } = useLoggedInStore();
  const router = useRouter();

  const [logoutMutation] = useLogoutMutation();

  const { loading: rfLoading, error: rfError } = useRefreshTokenQuery({
    onCompleted: (data) => {
      if (data?.refreshToken?.success) {
        setTokens({ act: data.refreshToken.token, rft: refreshToken });
        login();
      }
    },
    onError: (err) => {
      devMode && console.error(err);
      logout();
    },
    fetchPolicy: `network-only`,
    notifyOnNetworkStatusChange: true,
    pollInterval: 840000,
  });

  return null;
};

export default AuthManager;
