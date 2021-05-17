import React, { useState } from 'react';
import { useTheme } from '../../theme/theme.provider';
import { useLoggedInStore } from '../../stores/storeLogin';
import LoginCard from '../LoginCard';
import { useRouter } from 'next/router';
import { useLoginMutation } from '../../lib/generated';
import { useErrorToasts } from '../../lib/hooks/useErrorToast';
import { devMode } from '../../lib/constants';

// will likely need to take in a token or something
interface loginCardManagerProps {} // empty for now

const LoginCardManager: React.FC = () => {
    const router = useRouter()
    const loginStore = useLoggedInStore();
    const [loginMutation, {data, loading, error}] = useLoginMutation();
    const {addErrorToast} = useErrorToasts();

    const onLogin = async(email: string, password: string) => {
        // TODO login logic
        try{
            const response = await loginMutation({
                variables: {
                    input: {
                        email: email,
                        password: password
                    }
                }
            })
            console.log(response)
            addErrorToast({
                message: `Successfully logged in as ${response.data.login.gamerTag}`,
                duration: 5000,
                variant: `info`,
            })
            loginStore.login();
            return
        }
        catch(err){
            devMode ? (
                addErrorToast({
                    message: `Error whilst logging in: ${err.toString()}`
                })
            ) : (
                null
            )
            return err;
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