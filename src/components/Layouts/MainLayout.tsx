import './main.css'
import ToolBar from '../Toolbar/ToolBar'
import SideBar from '../Sidebar/SideBar'
import Payment from '../Payment/Payment'
import { useState } from 'react'

const MainLayout: React.FC = ({ children }) => {
    const [open, setOpen] = useState(true)

    return (
        <>
            <div>
                <ToolBar />
            </div>

            <div className={'main' + (open ? '' : ' full')}>
                <SideBar />
                <main>
                    <button onClick={() => setOpen(!open)}>df</button>
                    {children}
                </main>
                {open && <Payment />}
            </div>
        </>
    )
}

export default MainLayout