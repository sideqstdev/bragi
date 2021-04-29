import React, { useEffect } from 'react';
import {useErrorToasts} from '../../lib/hooks/useErrorToast'
import ErrorToast from '../ErrorToast';
import { useErrorToastsStore } from '../../stores/storeErrorToasts';

interface errorToastManagerProps {}

const ErrorToastManager: React.FC = () => {
    const toastStore = useErrorToastsStore();

    return (
        <div className={`flex w-full justify-center flex-col fixed top-36 lg:top-20`}
        style={{zIndex: 2001}}>
            {toastStore.toasts.map((toast) => (
                <div key={toast.id}>
                    <ErrorToast message={toast.message} duration={toast.duration} variant={toast.variant} 
                    onClose={() => toastStore.removeToast(toast.id)} type={`temporary`}/>
                </div>
            ))}
        </div>
    )
}

export default ErrorToastManager