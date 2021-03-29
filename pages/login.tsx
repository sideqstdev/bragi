import React from 'react';
import PageLayout from '../src/layouts/PageLayout';
import AuthLayout from '../src/layouts/AuthLayout';
import { Paragraph } from '../src/components/Typography';
import LoginCard from '../src/components/LoginCard';

const LoginPage = () => {
    return(
        <PageLayout name={"Sideqst | Login"}>
            <AuthLayout>
                <LoginCard/>
            </AuthLayout>
        </PageLayout>
    )
}

export default LoginPage;