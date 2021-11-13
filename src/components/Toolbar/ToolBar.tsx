import './toolbar.scss'
import Logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'

const ToolBar: React.FC = () => {
    return (
        <div className="toolbar">
            <Link to="/">
                <img className="logo" src={Logo} alt="logo" />
            </Link>

            {/* todo ссылки */}
            <div className="links">
                <Link to="/" className="link">
                    Главная {'>'}{' '}
                </Link>
                <Link to="/session" className="link">
                    Сеансы {'>'}{' '}
                </Link>

                <span className="link current">Фильм</span>
            </div>
            {/* todo make select */}
            <button className="select-btn">Кинотеатр на карповке {'>'}</button>
        </div>
    )
}

export default ToolBar