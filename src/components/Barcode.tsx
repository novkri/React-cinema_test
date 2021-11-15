import { useBarcode } from '@createnextapp/react-barcode'
import { TicketData } from '../assets/globalVariables'

interface BarcodeProps {
    ticket: TicketData
    filmName: string
}

const Barcode: React.FC<BarcodeProps> = ({ ticket, filmName }) => {
    const { inputRef } = useBarcode({
        value: 'teststring',
        options: {
            displayValue: false,
        },
    })

    return <canvas ref={inputRef} />
}

export default Barcode