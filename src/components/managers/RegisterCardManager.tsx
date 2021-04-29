import React from 'react'
import { useRouter } from 'next/router'
import { useLoggedInStore } from '../../stores/storeLogin';
import RegisterCard from '../RegisterCard';
import { useMutation } from '@apollo/client';
import { registerMutation } from '../../lib/gql/mutations/register.gql';
import { useRegisterMutation } from '../../lib/generated';
import { useErrorToasts } from '../../lib/hooks/useErrorToast';

interface registerCardManagerProps {}

const RegisterCardManager: React.FC = () => {
    const router = useRouter();
    const loginStore = useLoggedInStore();
    const [registerMutation, {data, loading, error}] = useRegisterMutation();
    const {addErrorToast} = useErrorToasts();

    const onRegister = async(email: string, username: string, password: string) => {
        //TODO register logic
        try{
            const response = await registerMutation({
                variables: {
                    input: {
                        email: email,
                        gamerTag: username,
                        password: password,
                    }
                }
            })
            console.log(response.data.register)
            addErrorToast({
                message: `Successfully registered ${response.data.register.email}`,
                duration: 7000,
                variant: `info`,
            })
            router.push(`/login`)
            return
        }catch(err){
            return err.toString()
        }
        
    }

    const routeLogin = () => {
        router.push(`/login`)
        return
    }

    const onTwitterRegister = () => {
        console.log("Registering with twitter")
        addErrorToast({
            message: `Going to twitter...`,
            duration: 5000,
            variant: "info",
        })
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