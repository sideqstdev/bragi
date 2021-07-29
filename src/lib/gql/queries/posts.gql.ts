import { gql } from "@apollo/client";

export const postsQuery = gql`
  query posts($page: pagination_input!) {
    posts(page: $page) {
      id
      title
      content
      imageUrl
      nsfw
      likes
      tags
      user {
        id
        name
        gamerTag
        profile {
          avatarUrl
        }
      }
    }
  }
`;
