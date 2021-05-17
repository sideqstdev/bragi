import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
import { devMode } from './constants'

const apolloLink = createHttpLink({
    uri: devMode ? `http://localhost:8080` : ``,
    credentials: `include`
})

export const apolloClient = new ApolloClient({
    link: apolloLink,
    cache: new InMemoryCache(),
})