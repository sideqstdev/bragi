import React, { ChangeEventHandler } from 'react';
import { useTheme } from '../theme/theme.provider';
import Card from './containers/Card';
import { MDHeader } from './Typography';
import Input from './Input';
import { FiMail, FiLock } from 'react-icons/fi';
import Button from './Button';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

export interface loginCardProps {
    onEmailChange?: ChangeEventHandler
    onPasswordChange?: ChangeEventHandler
    onLogin?: () => void;
    otherLoginMethods?: boolean;
}

const LoginCard: React.FC<loginCardProps> = ({onEmailChange, onPasswordChange, onLogin, otherLoginMethods = true, ...props}) => {
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    return(
        <Card className={`flex flex-row`}>
            {otherLoginMethods ? (
                <>
                <div style={{width: `445px`}} className={` pr-3 border-r-2 border-dark-box-box4`}>
                    <MDHeader className={`mb-2`}>Login</MDHeader>
                    <Input onChange={(e) => console.log(e.target.value)} iconLeft={<FiMail/>} className={`mb-2`} label={`Email`} stretch={true} placeholder={`milo@sideqst.com`}/>
                    <Input onChange={(e) => console.log(e.target.value)} iconLeft={<FiLock/>} className={`mb-6`} type={`password`} label={`Password`} stretch={true} placeholder={`password `}/>
                    <Button variant={`primary`} stretch={true}>Login</Button>
                </div>
                <div style={{width: `245px`}} className={`ml-3`}>
                    <MDHeader className={`mb-2`}>or login with</MDHeader>
                    <Button className={`mb-3 bg-discord hover:bg-discord-hover`} iconLeft={<FaDiscord/>} stretch={true} variant={`default`}>Discord</Button>
                    <Button iconLeft={<FaTwitter/>} stretch={true} variant={`default`}>Twitter</Button>
                </div>
                </>
            ) : (
                <div>
                <MDHeader>Login</MDHeader>
                <Input stretch={true} placeholder={`milo@sideqst.com`}/>
                </div>
            )}
            
        </Card>
    )
}

export default LoginCard