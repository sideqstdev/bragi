import React from 'react'
import { useRouter } from 'next/router'
import { useLoggedInStore } from '../../stores/storeLogin';
import RegisterCard from '../RegisterCard';

interface registerCardManagerProps {}

const RegisterCardManager: React.FC = () => {
    const router = useRouter();
    const loginStore = useLoggedInStore();

    const onRegister = () => {
        //TODO register logic
        loginStore.login()
        router.push(`/login`)
        return
    }

    const routeLogin = () => {
        router.push(`/login`)
        return
    }

    const onTwitterRegister = () => {
        console.log("Registering with twitter")
        //TODO setup twitter oauth
    }

    const onDiscordRegister = () => {
        //TODO setup discord oauth
    }

    // if logged in deny access to register page
    if(loginStore.loggedIn){
        router.push(`/`)
        return(
            null
        )
    }else {
        return(
            <RegisterCard onRegister={onRegister} onGoToLogin={routeLogin} onTwitterRegister={onTwitterRegister} onDiscordRegister={onDiscordRegister}/>
        )
    }
}

export default RegisterCardManager