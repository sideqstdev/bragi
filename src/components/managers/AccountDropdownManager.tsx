import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLoggedInStore } from "../../stores/storeLogin";
import AccountDropdown, { accountDropdownProps } from "../AccountDropdown";
import { dropdownOptions } from "../../globals/AccountDropdownOptions";

interface accountDropdownManagerProps extends Partial<accountDropdownProps> {
  open: boolean;
}

const AccountDropdownManager: React.FC<accountDropdownManagerProps> = ({
  open,
  ...props
}) => {
  const router = useRouter();
  const loginStore = useLoggedInStore();

  const onLogout = () => {
    loginStore.logout();
    router.push("/");
  };

  // status needs to update based on api
  return loginStore.loggedIn ? (
    <span className={`absolute top-20 right-6`}>
      <AccountDropdown
        {...dropdownOptions}
        onLogout={onLogout}
        status={"busy"}
        open={open}
        {...props}
      />
    </span>
  ) : null;
};

export default AccountDropdownManager;
