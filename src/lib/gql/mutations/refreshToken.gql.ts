import { gql } from "@apollo/client";

export const refreshTokenMutation = gql`
  mutation refreshToken {
    refreshToken {
      success
      token
    }
  }
`;
