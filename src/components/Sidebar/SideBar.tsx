import './sidebar.css'
import { Link } from 'react-router-dom'
import Avatar from '../../assets/img/avatar.png'

const SideBar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__links">
                <Link className="link active" to="/session">
                    {/* todo icon  absolute */}
                    Сеансы
                </Link>
                <Link className="link" to="/trailers">
                    Трейлеры
                </Link>
                <Link className="link" to="/news">
                    Новости
                </Link>
                <Link className="link" to="/about">
                    О нас
                </Link>
                <Link className="link" to="/contacts">
                    Контакты
                </Link>
            </div>

            <div className="account">
                <img src={Avatar} alt="avatar" />
                <span>Аккаунт</span>
            </div>
        </div>
    )
}

export default SideBar