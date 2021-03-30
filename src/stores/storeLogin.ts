import create from 'zustand'
import { combine } from "zustand/middleware";

export const useLoggedInStore = create(
    combine(
        {
            loggedIn: false as boolean,
        },
        (set) => ({
    
            login: () => set(() => ({loggedIn: true})),
            logout: () => set(() => ({loggedIn: false}))
        })
    )
)

