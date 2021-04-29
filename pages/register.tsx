import React from 'react';
import PageLayout from '../src/layouts/PageLayout';
import AuthLayout from '../src/layouts/AuthLayout';
import RegisterCardManager from '../src/components/managers/RegisterCardManager';
import ErrorToastManager from '../src/components/managers/ErrorToastManager';
import ErrorToast from '../src/components/ErrorToast';

const RegisterPage = () => {
    return(
        <PageLayout name={`Sideqst | Register`}>
            <AuthLayout>
                <RegisterCardManager/>
            </AuthLayout>
        </PageLayout>
    )
}

export default RegisterPage;