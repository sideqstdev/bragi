import { gql } from "@apollo/client";

export const refreshTokenQuery = gql`
  query refreshToken {
    refreshToken {
      success
      token
    }
  }
`;
