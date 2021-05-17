import React from 'react';
import { useCookies } from 'react-cookie';

const AuthManager: React.FC = () => {
    const [cookies] = useCookies(['sqstac'])
    console.log(cookies);
    return(
        null
    )
}

export default AuthManager