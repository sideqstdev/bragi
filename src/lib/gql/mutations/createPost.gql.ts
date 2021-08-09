import { gql } from "@apollo/client";

export const createPostMutation = gql`
  mutation createPost($input: post_input!) {
    createPost(input: $input) {
      id
      title
    }
  }
`;
