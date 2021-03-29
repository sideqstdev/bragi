import React from 'react'
import { useTheme } from '../theme/theme.provider'
import Head from 'next/head';
import Navbar from '../components/Navbar';

interface pageLayoutProps {
    name: string;
}

const PageLayout: React.FC<pageLayoutProps> = ({children, name, ...props}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return (
        <div className={`flex flex-col bg-${theme}-background w-full min-h-screen h-full overflow-x-auto`}>
            <Head>
                <title>{name}</title>
            </Head>
            <Navbar loggedIn={false}/>
            {children}
        </div>
    )
}

export default PageLayout