import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLoggedInStore } from "../../stores/storeLogin";
import Navbar from "../Navbar";
import { useLogoutMutation } from "../../lib/generated";
import { useErrorToasts } from "../../lib/hooks/useErrorToast";

const NavbarManager: React.FC = () => {
  const router = useRouter();
  const { logout, loggedIn, user } = useLoggedInStore();
  const [logoutMutation, { data, loading, error }] = useLogoutMutation();
  const { addErrorToast } = useErrorToasts();

  const onLogout = async () => {
    const response = await logoutMutation();
    if (response.data.logout) {
      addErrorToast({
        title: `Logout`,
        message: `Successfully logged out`,
        duration: 5000,
        variant: `info`,
      });
      logout();
      router.push(`/`);
    }
  };

  return (
    <Navbar
      onLogout={onLogout}
      loggedIn={loggedIn}
      avatar={user?.profile?.avatarUrl}
    />
  );
};

export default NavbarManager;
