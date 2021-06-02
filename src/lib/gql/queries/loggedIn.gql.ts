import { gql } from '@apollo/client';

export const loggedInQuery = gql`
    query currUser{
        currUser{
            id
            name
            gamerTag
            profile{
                id
                bio
                tags
                lolName
                avatarUrl
            }
        }
    }
`