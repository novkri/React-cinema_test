import './payment.css'
import Ticket from '../Ticket/Ticket'
import Pay from '../Pay/Pay'
import { useState } from 'react'
import { TicketData } from '../../assets/globalVariables'

interface PaymentProps {
    ticket: TicketData
    close: () => void
}

const Payment: React.FC<PaymentProps> = ({ ticket, close }) => {
    const [total, setTotal] = useState(800)
    const [step, setStep] = useState(0)

    const nextStep = (value: number) => {
        setStep(value)
    }

    return (
        <div className="payment">
            <button onClick={close}>X</button>
            {step === 0 && (
                <div className="ticket-container">
                    <Ticket ticket={ticket} />
                    <button onClick={() => nextStep(1)}>Оплатить</button>
                </div>
            )}
            {step === 1 && (
                <div className="pay">
                    <button onClick={() => nextStep(0)}>Назад</button>
                    <p>Оплата</p>
                    <Pay />
                    <div className={'add-card'}>
                        <span className={'plus'}>+</span>
                    </div>
                    {/*todo P icon */}
                    <button className={'pay__btn'}>Оплатить {total} Р</button>
                </div>
            )}
        </div>
    )
}

export default Payment