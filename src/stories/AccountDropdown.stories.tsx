import React, {ComponentProps} from 'react'

import {Story, Meta} from '@storybook/react'
import AccountDropdown, {accountDropdownProps} from '../components/AccountDropdown'
import { FaUser, FaTrophy, FaBug } from 'react-icons/fa';
import {BsFillGearFill} from 'react-icons/bs'

export default {
    title: `AccountDropdown`,
    component: AccountDropdown,
    argTypes: {
        
    }
} as Meta;

let options: accountDropdownProps = {
    open: true,
    status: `busy`,
    statusMsg: `Status`,
    items: [
        {icon: <FaUser/>, name: `Profile`, link: `/profile`},
        {icon: <FaTrophy/>, name: `My Lobbies`, link: `/profile/lobbies`},
        {icon: <BsFillGearFill/>, name: `Settings`, link: `/settings`},
        {icon: <FaBug/>, name: `Report a bug`, link: `/profile`},
    ],
    onLogout: () => {console.log("Logged out")}
}

export const AccountDropdownEx: Story<accountDropdownProps> = ({...props}) => {
    return(
        <div>
            <AccountDropdown
            {...props}
            {...options}
            />
        </div>
        
    )
}

