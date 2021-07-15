import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLoggedInStore } from "../../stores/storeLogin";
import Navbar from "../Navbar";

const NavbarManager: React.FC = () => {
  const router = useRouter();
  const loginStore = useLoggedInStore();
  const [showDropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    console.log(showDropdown);
    setDropdown(!showDropdown);
  };

  return (
    <Navbar
      loggedIn={loginStore.loggedIn}
      toggleAccountDropdown={toggleDropdown}
      accountDropdown={showDropdown}
    />
  );
};

export default NavbarManager;
