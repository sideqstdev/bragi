import React, { ChangeEventHandler } from 'react';
import { useTheme } from '../theme/theme.provider';
import Card from './containers/Card';
import { MDHeader, Paragraph } from './Typography';
import Input from './Input';
import { FiMail, FiLock } from 'react-icons/fi';
import Button from './Button';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

export interface loginCardProps {
    onEmailChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onLogin?: () => void;
    onDiscordLogin?: () => void;
    onTwitterLogin?: () => void;
    otherLoginMethods?: boolean;
}

const LoginCard: React.FC<loginCardProps> = ({onEmailChange, onPasswordChange, onLogin, onDiscordLogin, onTwitterLogin, otherLoginMethods = true, ...props}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return(
        <Card className={`flex flex-col w-full mx- md:w-3/4 md:flex-row lg:w-2/4 xl:w-2/6`}>
            {otherLoginMethods ? (
                <>
                <div className={`w-full border-b-2 pb-6 border-dark-box-box4 md:pr-3 md:border-b-0 md:border-r-2 md:border-dark-box-box4 md:w-2/3`}>
                    <MDHeader>Login</MDHeader>
                    <Input onChange={onEmailChange} iconLeft={<FiMail/>} className={`mt-2`} label={`Email`} stretch={true} placeholder={`milo@sideqst.com`}/>
                    <Input onChange={onPasswordChange} iconLeft={<FiLock/>} className={`mt-2`} type={`password`} label={`Password`} stretch={true} placeholder={`password `}/>
                    <Button onClick={onLogin} className={`mt-6`} variant={`primary`} stretch={true}>Login</Button>
                    <Paragraph className={`mt-6`}>Don't have an account? <span className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled`}>Register</span></Paragraph>
                    <Paragraph className={`mt-3`}><span className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled`}>Forgot Password?</span></Paragraph>
                </div>
                <div className={`mt-3 w-full md:ml-3 md:w-1/3`}>
                    <MDHeader className={`mb-2`}>or login with</MDHeader>
                    <Button onClick={onDiscordLogin} className={`bg-discord hover:bg-discord-hover`} iconLeft={<FaDiscord/>} stretch={true} variant={`default`}>Discord</Button>
                    <Button onClick={onTwitterLogin} className={`mt-3`} iconLeft={<FaTwitter/>} stretch={true} variant={`default`}>Twitter</Button>
                </div>
                </>
            ) : (
                <div className={`w-full pb-6`}>
                    <MDHeader>Login</MDHeader>
                    <Input onChange={onEmailChange} iconLeft={<FiMail/>} className={`mt-2`} label={`Email`} stretch={true} placeholder={`milo@sideqst.com`}/>
                    <Input onChange={onPasswordChange} iconLeft={<FiLock/>} className={`mt-2`} type={`password`} label={`Password`} stretch={true} placeholder={`password `}/>
                    <Button onClick={onLogin} className={`mt-6`} variant={`primary`} stretch={true}>Login</Button>
                    <Paragraph className={`mt-6`}>Don't have an account? <span className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled`}>Register</span></Paragraph>
                    <Paragraph className={`mt-3`}><span className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled`}>Forgot Password?</span></Paragraph>
                </div>
            )}
            
        </Card>
    )
}

export default LoginCard