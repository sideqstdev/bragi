import { accountDropdownProps } from '../components/AccountDropdown';
import { FaUser, FaTrophy, FaBug } from 'react-icons/fa';
import {BsFillGearFill} from 'react-icons/bs'

export const dropdownOptions: accountDropdownProps = {
    items: [
        {icon: <FaUser/>, name: `Profile`, link: `/profile`},
        {icon: <FaTrophy/>, name: `My Lobbies`, link: `/profile/lobbies`},
        {icon: <BsFillGearFill/>, name: `Settings`, link: `/settings`},
        {icon: <FaBug/>, name: `Report a bug`, link: `/profile`},
    ],
    onLogout: () => {console.log("Logged out")}
}