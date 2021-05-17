import create from 'zustand'
import { combine } from "zustand/middleware";
import { isServer } from '../lib/util/is-server';

const getTokens = () => {
    if(!isServer){
        try{
            return {
                accessToken: localStorage.getItem(`sqstac`) as string || ``,
                refreshToken: localStorage.getItem(`sqstrf`) as string || ``
            }
        }
        catch {}
    }
    return {
        accessToken: ``,
        refreshToken: ``,
    }
}

const isLoggedIn = (): boolean => {
    if(!isServer){
        try{
            if(localStorage.getItem(`sqstac`) && localStorage.getItem(`sqstrf`)){
                return true as boolean;
            }
            return false as boolean;
        }
        catch {
            return false as boolean;
        }
    }
    return false as boolean;
}

export const useLoggedInStore = create(
    combine(
        {
            loggedIn: isLoggedIn(),
            accessToken: getTokens().accessToken as string,
            refreshToken: getTokens().refreshToken as string,
        },
        (set) => ({
            setTokens: (tokenPayload: {act: string, rft: string}) => {
                set((state) => ({
                    ...state,
                    accessToken: tokenPayload.act,
                    refreshToken: tokenPayload.rft
                }))
            },
            login: () => set(() => ({
                loggedIn: true
            })),
            logout: () => {
                try{
                    localStorage.setItem(`sqstac`, ``);
                    localStorage.setItem(`sqstrf`, ``);
                }
                catch {}
                set(() => ({
                    loggedIn: false,
                    accessToken: ``,
                    refreshToken: ``,
                }))
            }
        })
    )
)

