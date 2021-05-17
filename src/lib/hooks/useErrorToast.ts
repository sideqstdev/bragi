import { errorToast } from '../../types/errorToast';
import { useErrorToastsStore } from '../../stores/storeErrorToasts';

export const createErrorToast = (toast: Omit<errorToast, "id">) => {
    useErrorToastsStore.getState().addToast(toast);
}

export const removeErrorToast = (id: string) => {
    useErrorToastsStore.getState().removeToast(id)
}

export const useErrorToasts = () => {
    return {
        removeErrorToast: removeErrorToast,
        addErrorToast: createErrorToast,
        toasts: useErrorToastsStore.getState().toasts,
    }
}