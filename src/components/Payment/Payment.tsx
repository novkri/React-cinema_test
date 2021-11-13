import './payment.css'
import Ticket from '../Ticket/Ticket'

const Payment: React.FC = () => {
    return (
        <div className="payment">
            <div className="ticket-container">
                <Ticket />
            </div>
            <div className="pay"></div>
        </div>
    )
}

export default Payment