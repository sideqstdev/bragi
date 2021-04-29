import create from 'zustand';
import { combine } from 'zustand/middleware';
import { errorToast } from '../types/errorToast';
import {v4} from 'uuid';

export const useErrorToastsStore = create(
    combine(
        {
            toasts: [] as errorToast[],
        },
        (set) => ({
            addToast: (newToast: Omit<errorToast, "id">) =>
                // adds new toasts to the array
                set((x) => ({ toasts: [...x.toasts, {...newToast, id: v4() }]})),
            removeToast: (id: string) => 
                // removes a toast based on id
                set((x) => ({ toasts: x.toasts.filter((y) => y.id !== id)}))
        })
    )
);