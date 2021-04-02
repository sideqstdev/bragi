import React, { useState } from 'react';
import { useTheme } from '../../theme/theme.provider';
import { useLoggedInStore } from '../../stores/storeLogin';
import LoginCard from '../LoginCard';
import { useRouter } from 'next/router';

// will likely need to take in a token or something
interface loginCardManagerProps {} // empty for now

const LoginCardManager: React.FC = () => {
    const router = useRouter()
    const loginStore = useLoggedInStore();

    const onLogin = (email: string, password: string) => {
        // TODO login logic
        // placeholder
        if(email === `milo@sideqst.com` && password === `asdf1234`){ // SUCCESS
            loginStore.login();
            return true
        }else if(email && password){ // FAILURE
            return false
        }
        else{
            // do nothing
        }
    }

    const routeRegister = () => {
        router.push(`/register`)
        return
    }

    const routeForgotPassword = () => {
        router.push(`/forgotpassword`)
        return
    }

    const onTwitterLogin = () => {
        console.log("Logging in with twitter");
        //TODO setup twitter oauth
    }

    const onDiscordLogin = () => {
        console.log("Logging in with discord")
        //TODO setup discord oauth
    }

    if(loginStore.loggedIn){
        router.push(`/`)
        return(
            null
        )
    }
    else{
        return(
            <LoginCard onLogin={onLogin} onGoToRegister={routeRegister} onForgotPassword={routeForgotPassword} onDiscordLogin={onDiscordLogin} onTwitterLogin={onTwitterLogin}/>
        )
    }
}

export default LoginCardManager