import './chair.css'
import { useEffect, useState } from 'react'

interface ChairProps {
    status: 'free' | 'occupied'
    id: number
    handleSelectPlace: (id: number) => void
    isSelected: boolean
}
const Chair: React.FC<ChairProps> = ({
    status,
    id,
    handleSelectPlace,
    isSelected,
}) => {
    const [statusClass, setStatusClass] = useState('')

    useEffect(() => {
        if (status) {
            setStatusClass(status)
        }

        if (status !== 'occupied' && isSelected) {
            setStatusClass('active')
        }
    }, [status, isSelected])

    return (
        <div
            className={'chair ' + statusClass}
            onClick={() => handleSelectPlace(id)}
        >
            {id}
        </div>
    )
}

export default Chair