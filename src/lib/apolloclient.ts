import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
import { devMode } from './constants'
import {setContext} from '@apollo/client/link/context'
import { isServer } from './util/is-server'

const apolloLink = () => {
    let token;
    if(!isServer){
        token = localStorage.getItem(`sqstac`) as string || ``;
    }
    return createHttpLink({
        uri: devMode ? `http://localhost:8080` : ``,
        credentials: `include`,
        headers: {
            "Authorization": token ? `Bearer ${token}` : `No Token`
        }
    })
}

export const apolloClient = new ApolloClient({
    ssrMode: typeof window === `undefined`,
    link: apolloLink(),
    cache: new InMemoryCache(),
})