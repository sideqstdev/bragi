import { gql } from '@apollo/client';

export const currUserQuery = gql`
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