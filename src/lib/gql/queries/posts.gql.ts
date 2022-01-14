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
      likedByIds
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
