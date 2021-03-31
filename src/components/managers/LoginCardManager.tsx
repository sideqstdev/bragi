import React from 'react';
import { useTheme } from '../../theme/theme.provider';
import { useLoggedInStore } from '../../stores/storeLogin';
import LoginCard from '../LoginCard';
import { useRouter } from 'next/router';

// will likely need to take in a token or something
interface loginCardManagerProps {} // empty for now

const LoginCardManager: React.FC = () => {
    const router = useRouter()
    const loginStore = useLoggedInStore();

    const onLogin = () => {
        loginStore.login()
    }

    if(loginStore.loggedIn){
        router.push(`/`)
        return(
            null
        )
    }
    else{
        return(
            <LoginCard onLogin={onLogin}/>
        )
    }
}

export default LoginCardManager