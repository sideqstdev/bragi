import React from 'react';
import cookieCutter from 'cookie-cutter'
import { useCurrUserQuery, useRefreshTokenMutation } from '../../lib/generated';
import { setStorageTokens, useLoggedInStore } from '../../stores/storeLogin';

const AuthManager: React.FC = () => {

    const {setUser, login, logout, refreshToken, setTokens} = useLoggedInStore()

    const [refreshTokenMutation] = useRefreshTokenMutation()

    const {loading, error} = useCurrUserQuery({
        onCompleted: (data) => {
            setUser(data.currUser)
            login()
        },
        onError: async () => {
            try{
                const response = await refreshTokenMutation({
                    variables: {
                        refreshToken: refreshToken
                    },
                    
                });
                if(response.data.refreshToken.success){
                    setTokens({act: response.data.refreshToken.token, rft: refreshToken});
                    setStorageTokens(response.data.refreshToken.token, refreshToken);
                    login();
                    return;
                }
                return;
            }
            catch(err){
                logout();
                setStorageTokens(``, ``);
            }
        }
    })
    
    return(
        null
    )
}

export default AuthManager