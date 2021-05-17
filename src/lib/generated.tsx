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
  login: User;
  logout: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  input: Register_Input;
};


export type MutationLoginArgs = {
  input: Login_Input;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  currUser: User;
  status: Scalars['String'];
};


export type QueryUserArgs = {
  input: User_Input;
};

export type Login_Input = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Profile = {
  __typename?: 'profile';
  id: Scalars['ID'];
  bio: Scalars['String'];
  tags: Array<Scalars['String']>;
  lolName: Scalars['String'];
  avatarUrl?: Maybe<Scalars['String']>;
  user: User;
  level: Scalars['Int'];
  points: Scalars['Int'];
  wins: Scalars['Int'];
  entered: Scalars['Int'];
  hosted: Scalars['Int'];
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
  gamerTag: Scalars['String'];
  email: Scalars['String'];
  suspended?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<Profile>;
};

export type User_Input = {
  email?: Maybe<Scalars['String']>;
  gamerTag?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  input: Login_Input;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'user' }
    & Pick<User, 'id' | 'name' | 'gamerTag'>
    & { profile?: Maybe<(
      { __typename?: 'profile' }
      & Pick<Profile, 'bio' | 'tags'>
    )> }
  ) }
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


export const LoginDocument = gql`
    mutation login($input: login_input!) {
  login(input: $input) {
    id
    name
    gamerTag
    profile {
      bio
      tags
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