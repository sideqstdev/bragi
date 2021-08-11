import React from "react";
import { useTheme } from "../theme/theme.provider";
import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarManager from "../components/managers/NavbarManager";

interface pageLayoutProps {
  name: string;
}

const PageLayout: React.FC<pageLayoutProps> = ({
  children,
  name,
  ...props
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  return (
    <div className={`bg-${theme}-background min-h-screen flex flex-col`}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={`sticky w-full top-0 z-40 lg:z-50`}>
        <NavbarManager />
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
