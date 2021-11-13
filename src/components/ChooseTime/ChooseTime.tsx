import { useParams } from 'react-router-dom'

const ChooseTime: React.FC = () => {
    let params = useParams()

    return <h2>Invoice: {params.invoiceId}</h2>
}

export default ChooseTime