import './toolbar.scss'
import Logo from '../../assets/img/logo.svg'

const ToolBar: React.FC = () => {
    return (
        <div className="toolbar">
            <img className="logo" src={Logo} alt="logo" />
            {/* todo ссылки */}
            <div className="links">
                <span className="link">Главная {'>'} </span>
                <span className="link">Сеансы {'>'} </span>
                <span className="link current">Фильм</span>
            </div>
            {/* todo make select */}
            <button className="select-btn">Кинотеатр на карповке {'>'}</button>
        </div>
    )
}

export default ToolBar