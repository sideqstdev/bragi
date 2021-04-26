import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
