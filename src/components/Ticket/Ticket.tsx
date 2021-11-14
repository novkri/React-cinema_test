import './ticket.scss'
import { TicketData } from '../../assets/globalVariables'

interface TicketProps {
    ticket: TicketData
}

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
    return (
        <div className="ticket-card">
            <div className="header">
                <span>Билеты</span>
                {/* todo x */}
                <span>х1</span>
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
                            <span className="info__info">{ticket.date}</span>
                        </li>
                        <li>
                            Время:{' '}
                            <span className="info__info">
                                {ticket.time.split(' - ')[0]}
                            </span>
                        </li>
                        <li>
                            Ряд:{' '}
                            <span className="info__info">
                                {ticket.placeRow}
                            </span>
                        </li>
                        <li>
                            {/* todo several places */}
                            Места:{' '}
                            <span className="info__info">{ticket.placeId}</span>
                        </li>
                    </ul>
                </div>
                <div className="barcode">
                    <div className="decoration" />
                    barcode
                </div>
            </div>
        </div>
    )
}

export default Ticket