import { gql } from "@apollo/client";

export const loginMutation = gql`
  mutation login($input: login_input!) {
    login(input: $input) {
      refreshToken
      token
      success
      user {
        gamerTag
      }
    }
  }
`;
