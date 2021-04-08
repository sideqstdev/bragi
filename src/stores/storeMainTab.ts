import create from 'zustand';
import { combine } from "zustand/middleware";

export const useMainTabStore = create(
    combine(
        {
            tab: 0 as number,
        },
        (set) => ({
            setTab: (num: number) => set(() => ({tab: num}))
        })
    )
)