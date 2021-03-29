import React from 'react'
import { useTheme } from '../theme/theme.provider'

export interface logoProps {
    lightLogo?: string;
    darkLogo?: string;
    onClick: () => void;
}

const LogoBlock: React.FC<logoProps> = ({lightLogo = "/sideqst-logo-white-140.png", darkLogo = "/sideqst-logo-black-140.png", onClick}) => {
    const themeCtx = useTheme()
    const theme = themeCtx.theme

    switch(theme){
        case "light":
            return(
                <div onClick={onClick} className={`flex flex-row items-center cursor-pointer`}>
                    <img alt={`logo`} width={60} height={60} src={darkLogo}/>
                    <h3>Sideqst</h3>
                </div>
            )
        default:
            return(
                <div onClick={onClick} className={`flex flex-row items-center cursor-pointer`}>
                    <img alt={`logo`} width={60} height={60} src={lightLogo}/>
                    <h3>Sideqst</h3>
                </div>
            )
    }
}

export default LogoBlock