import React, { ReactElement, ReactNode } from 'react'
import { useTheme } from '../theme/theme.provider'
import { Paragraph } from './Typography'
import { useRouter } from 'next/router'
import { FaCircle } from 'react-icons/fa'

type dropdownItem = {
    icon: ReactNode;
    name: string;
    link: string;
}

type userStatus = `online` | `busy` | `ingame` | `invisible` | `offline`

export interface accountDropdownProps extends Partial<HTMLDivElement> {
    items: dropdownItem[];
    statusMsg?: string;
    status?: userStatus;
    open: boolean;
    onLogout: () => void;
}

const AccountDropdown: React.FC<accountDropdownProps> = ({items, statusMsg = "Online", status = "online", onLogout, open = false, ...props}) => {
    const router = useRouter();
    const themeCtx = useTheme();
    const theme = themeCtx.theme;

    const routeLink = (link: string) => {
        router.push(link)
    }

    const statusBubbleColor = () => {
        switch(status){
            case "busy":
                return `text-${theme}-danger`
            case "online":
                return `text-${theme}-confirm`
            case "ingame":
                return `text-accent`
            case "invisible":
                return `text-${theme}-box-box3`
            default:
                return `text-${theme}-disabled`
        }
    }

    const renderItems = () => {
        return items.map((item, index) => {
            return(
                <a key={`${index} ${item.name}`} onClick={() => routeLink(item.link)} className={`w-full flex flex-row items-center px-3 py-2 cursor-pointer hover:bg-${theme}-box-box1`}>
                    <span className={`flex items-center`}>
                        <span className={`mr-2 items-center text-tny text-${theme}-text`}>{item.icon}</span>
                    </span>
                    <Paragraph>{item.name}</Paragraph>
                </a>
            )
        })
    }

    return open ? (
        <div className={`${props.className} bg-${theme}-default flex flex-col rounded-md max-w-xs absolute w-40 z-20 top-20 right-8`}>
            <div className={` pt-3`}>
                <div className={`flex flex-row border-b-2 px-3 border-${theme}-disabled pb-2`}>
                    <span className={`flex items-center`}>
                        <span className={`text-tny items-center ${statusBubbleColor()} mr-2`}><FaCircle/></span>
                        <Paragraph className={statusBubbleColor()}>{statusMsg}</Paragraph>
                    </span>
                </div>
                {renderItems()}
            </div>
            <a onClick={onLogout} className={`flex px-3 py-2 bg-${theme}-box-box3 text-${theme}-text rounded-bl-md rounded-br-md cursor-pointer hover:bg-${theme}-box-box1`}>
                <Paragraph isBold>Logout</Paragraph>
            </a>
        </div>
    ) : null

}

export default AccountDropdown