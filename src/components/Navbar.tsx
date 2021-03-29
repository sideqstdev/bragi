import React from 'react'
import { useTheme } from '../theme/theme.provider'
import Button from './Button'
import { Avatar } from './Avatar'
import {FaPlus, FaBell, FaSun, FaSearch} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import Input from './Input'
import LogoBlock from './LogoBlock'
import { useRouter } from 'next/router'

export type logoTuple = {
    darkLogo: string;
    lightLogo: string
}

export interface navProps {
    loggedIn?: boolean
    avatar?: string;
    logos?: logoTuple;
}

const Navbar: React.FC<navProps> = ({loggedIn, avatar= "/mismatchedsocks.jpg", logos, ...props}: navProps) => {
    const themeCtx = useTheme()
    const theme = themeCtx.theme
    const router = useRouter()

    const routeHome = () => {
        router.push(`/`)
    }

    const routeLogin = () => {
        router.push(`/login`)
    }

    const routeRegister = () => {
        router.push(`/register`)
    }

    // checks the logged in prop and renders the appropriate r-block
    const loggedInRender = () => {
        if(loggedIn){
            return(
                <>
                    <a className={`cursor-pointer flex content-center items-center`}>
                        <Avatar src={avatar}></Avatar>
                    </a>
                    <div className={`flex flex-row-reverse content-center  mr-6`}>
                        <Button variant={"primary"} size={"small"} iconRight={<FaPlus/>}>Create</Button>
                        <Button variant={"icon"}><FaBell/></Button>
                        <Button onClick={themeCtx.toggleTheme} variant={"icon"}><FiSun className={`text-dark-danger-hover`}/></Button>
                    </div>
                </>
            )
        } else {
            return(
                <>
                    <div className={`flex flex-row-reverse content-center  mr-6`}>
                        <Button onClick={routeLogin} variant={"primary"}>Login</Button>
                        <Button onClick={routeRegister} variant={"text"}>Register</Button>
                        <Button onClick={themeCtx.toggleTheme} variant={"icon"}><FiSun className={`text-dark-danger-hover`}/></Button>
                    </div>
                </>
            )
        }
    }

    return(
        <div className={`bg-${theme}-altbackground text-${theme}-text h-20 w-screen pr-8 pl-8 inline-grid grid-cols-10 fixed`}>
            <div className={`flex flex-row col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-3 mr-4 ml-4`}>
                <LogoBlock onClick={routeHome} lightLogo={logos ? logos.lightLogo : undefined} darkLogo={logos ? logos.darkLogo : undefined}/>
            </div>

            <div className={`flex items-center col-span-4 w-full sm:col-span-2 md:col-span-4 lg:col-span-4 mr-4 ml-4`}>
                <Input iconLeft={<FaSearch/>} placeholder={"Tournament Search"} stretch={true}></Input>
            </div>
            
            <nav className={`flex flex-row-reverse col-span-4 content-center items-center sm:col-span-5 md:col-span-4 lg:col-span-3 mr-4 ml-4`}>
                {loggedInRender()}
            </nav>
        </div>
    )
        
    }

export default Navbar