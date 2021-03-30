import React from 'react';
import PageLayout from '../src/layouts/PageLayout';
import AuthLayout from '../src/layouts/AuthLayout';
import { Paragraph } from '../src/components/Typography';
import LoginCard from '../src/components/LoginCard';
import LoginCardManager from '../src/components/managers/LoginCardManager';

const LoginPage = () => {
    return(
        <PageLayout name={"Sideqst | Login"}>
            <AuthLayout>
                <LoginCardManager/>
            </AuthLayout>
        </PageLayout>
    )
}

export default LoginPage;