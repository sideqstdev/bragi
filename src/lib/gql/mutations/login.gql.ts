import { gql } from '@apollo/client';

export const loginMutation = gql`
    mutation login($input: login_input!) {
        login(input: $input){
            id
            name
            gamerTag
            profile{
                bio
                tags
            }
        }
    }
`