import { gql } from "@apollo/client";

export const currUserQuery = gql`
  query currUser {
    currUser {
      id
      name
      gamerTag
      verified
      profile {
        id
        bio
        tags
        lolName
        avatarUrl
      }
    }
  }
`;
