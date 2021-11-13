import ToolBar from '../Toolbar/ToolBar'

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <div>
                <ToolBar />
            </div>

            <main>{children}</main>
        </>
    )
}

export default MainLayout