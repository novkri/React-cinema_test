import './payment.css'
import Ticket from '../Ticket/Ticket'
import Pay from '../Pay/Pay'
import { useState } from 'react'

const Payment: React.FC = () => {
    const [total, setTotal] = useState(800)

    return (
        <div className="payment">
            <div className="ticket-container">
                <Ticket />
            </div>
            <div className="pay">
                <p>Оплата</p>
                <Pay />
                <div className={'add-card'}>
                    <span className={'plus'}>+</span>
                </div>
                {/*todo P icon */}
                <button className={'pay__btn'}>Оплатить {total} Р</button>
            </div>
        </div>
    )
}

export default Payment