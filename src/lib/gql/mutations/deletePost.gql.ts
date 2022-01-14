import { gql } from "@apollo/client";

export const deletePostMutation = gql`
  mutation deletePost($id: String!) {
    deletePost(id: $id)
  }
`;
