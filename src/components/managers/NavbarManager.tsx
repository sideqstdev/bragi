import React from 'react';
import { useRouter } from 'next/router';
import { useLoggedInStore } from '../../stores/storeLogin';
import Navbar from '../Navbar';

const NavbarManager: React.FC = () => {
    const router = useRouter();
    const loginStore = useLoggedInStore();

    return(
        <Navbar loggedIn={loginStore.loggedIn}/>
    )
}

export default NavbarManager;