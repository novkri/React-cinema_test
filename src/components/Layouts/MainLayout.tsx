import ToolBar from '../Toolbar/ToolBar'
import SideBar from '../Sidebar/SideBar'

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <div>
                <ToolBar />
            </div>

            <div className="main">
                <SideBar />
                <main>{children}</main>
                <div></div>
            </div>
        </>
    )
}

export default MainLayout