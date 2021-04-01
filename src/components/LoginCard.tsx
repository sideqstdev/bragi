import React, { ChangeEventHandler } from 'react';
import { useTheme } from '../theme/theme.provider';
import Card from './containers/Card';
import { Form, Formik, useFormik } from "formik";
import { MDHeader, Paragraph } from './Typography';
import Input from './Input';
import { FiMail, FiLock } from 'react-icons/fi';
import Button from './Button';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { useLoggedInStore } from '../stores/storeLogin';

export interface loginCardProps {
    onLogin: () => void;
    onDiscordLogin?: () => void;
    onTwitterLogin?: () => void;
    onGoToRegister: () => void;
    onForgotPassword: () => void;
    otherLoginMethods?: boolean;
}

const LoginCard: React.FC<loginCardProps> = ({onLogin, onDiscordLogin, onTwitterLogin, onGoToRegister, onForgotPassword, otherLoginMethods = true,  ...props}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;
    const loginStore = useLoggedInStore();

    // loginForm logic
    const loginForm = useFormik({
        initialValues: {
            email: ``,
            password: ``
        },
        validateOnChange: false,
        validate: ({email, password}) => {
            const errors: Record<string, string> = {};
            console.log(email, password)
            if(email.length <= 0){
                errors.email = `no email provided`
            }
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
                errors.email = `invalid email`
            }
            else{
                // TODO link up to auth service
            }

            if(password.length <= 0){
                errors.password = `no password provided`
            }
            else if(password.length < 8){
                errors.password = `invalid password`
            }
            else{
                if(!errors.email){
                    // TODO link up to auth service to confirm password against
                }
                
            }
            return errors;
        },
        onSubmit: async({email, password}) => {
            const val = {email, password};

            // TODO login logic
            loginStore.login()
            
            onLogin();
        }
    })

    return(
        <Card className={`flex flex-col w-full mx- md:w-3/4 md:flex-row lg:w-2/4 xl:w-2/6`}>
            {otherLoginMethods ? (
                <>
                <form onSubmit={loginForm.handleSubmit} className={`w-full border-b-2 pb-6 border-dark-box-box4 md:pr-3 md:border-b-0 md:border-r-2 md:border-dark-box-box4 md:w-2/3`}>
                    <MDHeader>Login</MDHeader>
                    <Input onChange={loginForm.handleChange} name={`email`} autoFocus error={loginForm.errors.email} iconLeft={<FiMail/>} className={`mt-2`} label={`Email`} stretch={true} placeholder={`sideqst@sideqst.com`}/>
                    <Input onChange={loginForm.handleChange} name={`password`} error={loginForm.errors.password} iconLeft={<FiLock/>} className={`mt-2`} type={`password`} label={`Password`} stretch={true} placeholder={`password `}/>
                    <Button type={`submit`} className={`mt-6`} variant={`primary`} stretch={true}>Login</Button>
                    <Paragraph className={`mt-6`}>Don't have an account? <span onClick={onGoToRegister} className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled font-bold`}>Register</span></Paragraph>
                    <Paragraph className={`mt-3`}><span onClick={onForgotPassword} className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled font-bold`}>Forgot Password?</span></Paragraph>
                </form>
                <div className={`mt-3 w-full md:ml-3 md:w-1/3`}>
                    <MDHeader className={`mb-2`}>or login with</MDHeader>
                    <Button onClick={onDiscordLogin} className={`bg-discord hover:bg-discord-hover`} iconLeft={<FaDiscord/>} stretch={true} variant={`default`}>Discord</Button>
                    <Button onClick={onTwitterLogin} className={`mt-3`} iconLeft={<FaTwitter/>} stretch={true} variant={`default`}>Twitter</Button>
                </div>
                </>
            ) : (
                <form onSubmit={loginForm.handleSubmit} className={`w-full pb-6`}>
                    <MDHeader>Login</MDHeader>
                    <Input onChange={loginForm.handleChange} name={`email`} autoFocus error={loginForm.errors.email} iconLeft={<FiMail/>} className={`mt-2`} label={`Email`} stretch={true} placeholder={`sideqst@sideqst.com`}/>
                    <Input onChange={loginForm.handleChange} name={`password`} error={loginForm.errors.password} iconLeft={<FiLock/>} className={`mt-2`} type={`password`} label={`Password`} stretch={true} placeholder={`password `}/>
                    <Button type={`submit`} className={`mt-6`} variant={`primary`} stretch={true}>Login</Button>
                    <Paragraph className={`mt-6`}>Don't have an account? <span onClick={onGoToRegister} className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled font-bold`}>Register</span></Paragraph>
                    <Paragraph className={`mt-3`}><span onClick={onForgotPassword} className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled font-bold`}>Forgot Password?</span></Paragraph>
                </form>
            )}
        </Card>
    )
}

export default LoginCard