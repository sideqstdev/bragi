import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};


export type Mutation = {
  __typename?: 'Mutation';
  register: User;
  login: Login_Response;
  logout: Scalars['Boolean'];
  createPost: Post;
  deletePost: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  input: Register_Input;
};


export type MutationLoginArgs = {
  input: Login_Input;
};


export type MutationCreatePostArgs = {
  input: Post_Input;
};


export type MutationDeletePostArgs = {
  input: Post_Delete_Input;
};

export type Query = {
  __typename?: 'Query';
  refreshToken: Refresh_Token_Response;
  user: User;
  currUser: User;
  posts: Array<Post>;
  status: Scalars['String'];
};


export type QueryUserArgs = {
  input: User_Input;
};


export type QueryPostsArgs = {
  page: Pagination_Input;
};

export type Comment = {
  __typename?: 'comment';
  id: Scalars['ID'];
  create?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  content: Scalars['String'];
  post?: Maybe<Post>;
  user?: Maybe<User>;
  likes?: Maybe<Scalars['Float']>;
};

export type Login_Input = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Login_Response = {
  __typename?: 'login_response';
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type Pagination_Input = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type Post = {
  __typename?: 'post';
  id: Scalars['ID'];
  create?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  nsfw?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Scalars['String']>>;
  comments?: Maybe<Array<Comment>>;
  user?: Maybe<User>;
  likes?: Maybe<Scalars['Float']>;
};

export type Post_Delete_Input = {
  id: Scalars['String'];
};

export type Post_Input = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  nsfw?: Maybe<Scalars['Boolean']>;
};

export type Profile = {
  __typename?: 'profile';
  id: Scalars['ID'];
  bio: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  lolName?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  level: Scalars['Int'];
  points: Scalars['Int'];
  wins: Scalars['Int'];
  entered: Scalars['Int'];
  hosted: Scalars['Int'];
};

export type Refresh_Token_Response = {
  __typename?: 'refresh_token_response';
  success: Scalars['Boolean'];
  token: Scalars['String'];
};

export type Register_Input = {
  gamerTag: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'user';
  id?: Maybe<Scalars['ID']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  gamerTag: Scalars['String'];
  email: Scalars['String'];
  suspended?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<Profile>;
  posts?: Maybe<Array<Post>>;
};

export type User_Input = {
  email?: Maybe<Scalars['String']>;
  gamerTag?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type CreatePostMutationVariables = Exact<{
  input: Post_Input;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'post' }
    & Pick<Post, 'id' | 'title'>
  ) }
);

export type LoginMutationVariables = Exact<{
  input: Login_Input;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'login_response' }
    & Pick<Login_Response, 'refreshToken' | 'token' | 'success'>
    & { user?: Maybe<(
      { __typename?: 'user' }
      & Pick<User, 'gamerTag'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  input: Register_Input;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'user' }
    & Pick<User, 'id' | 'email' | 'gamerTag'>
  ) }
);

export type CurrUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrUserQuery = (
  { __typename?: 'Query' }
  & { currUser: (
    { __typename?: 'user' }
    & Pick<User, 'id' | 'name' | 'gamerTag' | 'verified'>
    & { profile?: Maybe<(
      { __typename?: 'profile' }
      & Pick<Profile, 'id' | 'bio' | 'tags' | 'lolName' | 'avatarUrl'>
    )> }
  ) }
);

export type PostsQueryVariables = Exact<{
  page: Pagination_Input;
}>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'imageUrl' | 'nsfw' | 'likes' | 'tags'>
    & { user?: Maybe<(
      { __typename?: 'user' }
      & Pick<User, 'id' | 'name' | 'gamerTag'>
      & { profile?: Maybe<(
        { __typename?: 'profile' }
        & Pick<Profile, 'avatarUrl'>
      )> }
    )> }
  )> }
);

export type RefreshTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenQuery = (
  { __typename?: 'Query' }
  & { refreshToken: (
    { __typename?: 'refresh_token_response' }
    & Pick<Refresh_Token_Response, 'success' | 'token'>
  ) }
);


export const CreatePostDocument = gql`
    mutation createPost($input: post_input!) {
  createPost(input: $input) {
    id
    title
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const LoginDocument = gql`
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
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation register($input: register_input!) {
  register(input: $input) {
    id
    email
    gamerTag
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CurrUserDocument = gql`
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

/**
 * __useCurrUserQuery__
 *
 * To run a query within a React component, call `useCurrUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrUserQuery, CurrUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrUserQuery, CurrUserQueryVariables>(CurrUserDocument, options);
      }
export function useCurrUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrUserQuery, CurrUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrUserQuery, CurrUserQueryVariables>(CurrUserDocument, options);
        }
export type CurrUserQueryHookResult = ReturnType<typeof useCurrUserQuery>;
export type CurrUserLazyQueryHookResult = ReturnType<typeof useCurrUserLazyQuery>;
export type CurrUserQueryResult = Apollo.QueryResult<CurrUserQuery, CurrUserQueryVariables>;
export function refetchCurrUserQuery(variables?: CurrUserQueryVariables) {
      return { query: CurrUserDocument, variables: variables }
    }
export const PostsDocument = gql`
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

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePostsQuery(baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export function refetchPostsQuery(variables?: PostsQueryVariables) {
      return { query: PostsDocument, variables: variables }
    }
export const RefreshTokenDocument = gql`
    query refreshToken {
  refreshToken {
    success
    token
  }
}
    `;

/**
 * __useRefreshTokenQuery__
 *
 * To run a query within a React component, call `useRefreshTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRefreshTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenQuery(baseOptions?: Apollo.QueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(RefreshTokenDocument, options);
      }
export function useRefreshTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(RefreshTokenDocument, options);
        }
export type RefreshTokenQueryHookResult = ReturnType<typeof useRefreshTokenQuery>;
export type RefreshTokenLazyQueryHookResult = ReturnType<typeof useRefreshTokenLazyQuery>;
export type RefreshTokenQueryResult = Apollo.QueryResult<RefreshTokenQuery, RefreshTokenQueryVariables>;
export function refetchRefreshTokenQuery(variables?: RefreshTokenQueryVariables) {
      return { query: RefreshTokenDocument, variables: variables }
    }