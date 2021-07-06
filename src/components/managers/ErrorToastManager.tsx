import React, { useEffect } from 'react';
import {useErrorToasts} from '../../lib/hooks/useErrorToast'
import ErrorToast from '../ErrorToast';
import { useErrorToastsStore } from '../../stores/storeErrorToasts';

interface errorToastManagerProps {}

const ErrorToastManager: React.FC = () => {
    const toastStore = useErrorToastsStore();

    return (
        <div className={`flex justify-end flex-col fixed bottom-6 right-6`}
        style={{zIndex: 2001}}>
            {toastStore.toasts.map((toast) => (
                <div key={toast.id} className={`mt-2`}>
                    <ErrorToast title={toast.title} type={toast.type} message={toast.message} duration={toast.duration} variant={toast.variant} customColor={toast.customColor}
                    onClose={() => toastStore.removeToast(toast.id)}/>
                </div>
            ))}
        </div>
    )
}

export default ErrorToastManager