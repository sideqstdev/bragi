import {gql} from '@apollo/client';

export const registerMutation = gql`
    mutation register($input: register_input!) {
        register(input: $input){
            id
            email
            gamerTag
        }
    }
`