import { gql } from "@apollo/client";

export const createPostMutation = gql`
  mutation likePost($id: String!) {
    likePost(id: $id)
  }
`;
