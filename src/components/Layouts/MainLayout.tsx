import './main.css'
import ToolBar from '../Toolbar/ToolBar'
import SideBar from '../Sidebar/SideBar'
import Payment from '../Payment/Payment'
import { TicketData } from '../../assets/globalVariables'

interface MainLayoutProps {
    isOpenTicket: boolean
    ticket: TicketData
}

const MainLayout: React.FC<MainLayoutProps> = ({
    isOpenTicket,
    ticket,
    children,
}) => {
    return (
        <>
            <div>
                <ToolBar />
            </div>

            <div className={'main' + (!isOpenTicket ? '' : ' full')}>
                <SideBar />
                <main>{children}</main>
                {isOpenTicket && <Payment ticket={ticket} />}
            </div>
        </>
    )
}

export default MainLayout