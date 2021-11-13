import './ticket.scss'

const Ticket: React.FC = () => {
    return (
        <div className="ticket-card">
            <div className="header">
                <span>Билеты</span>
                {/* todo x */}
                <span>х2</span>
            </div>
            <div className="body">
                <div className="info">
                    <ul className="info__title">
                        <li>
                            Фильм:{' '}
                            <span className="info__info">
                                Кекс наносит ответный удар
                            </span>
                        </li>
                        <li>
                            Дата:{' '}
                            <span className="info__info">23 сентября</span>
                        </li>
                        <li>
                            Время: <span className="info__info">20:44</span>
                        </li>
                        <li>
                            Ряд: <span className="info__info">4</span>
                        </li>
                        <li>
                            Места: <span className="info__info">4, 5</span>
                        </li>
                    </ul>
                </div>
                <div className="barcode">
                    <div className="decoration"></div>
                    barcode
                </div>
            </div>
        </div>
    )
}

export default Ticket