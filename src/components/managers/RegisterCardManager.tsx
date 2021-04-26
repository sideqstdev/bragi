import React from 'react'
import { useRouter } from 'next/router'
import { useLoggedInStore } from '../../stores/storeLogin';
import RegisterCard from '../RegisterCard';
import { useMutation } from '@apollo/client';
import { registerMutation } from '../../lib/gql/register.gql';

interface registerCardManagerProps {}

const RegisterCardManager: React.FC = () => {
    const router = useRouter();
    const loginStore = useLoggedInStore();
    const [register] = useMutation(registerMutation);

    const onRegister = async(email: string, username: string, password: string) => {
        //TODO register logic
        try{
            const response = await register({
                variables: {
                    input: {
                        email: email,
                        gamerTag: username,
                        password: password,
                    }
                }
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