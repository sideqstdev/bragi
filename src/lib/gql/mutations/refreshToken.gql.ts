import {gql} from '@apollo/client';

export const refreshTokenMutation = gql`
    mutation refreshToken($refreshToken: String!) {
        refreshToken(refreshToken: $refreshToken){
            success
            token
        }
    }
`