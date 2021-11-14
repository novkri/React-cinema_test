import './chair.css'
import { useEffect, useState } from 'react'

interface ChairProps {
    status: 'free' | 'occupied'
    id: number
}
const Chair: React.FC<ChairProps> = ({ status, id }) => {
    const [isSelected, setIsSelected] = useState(false)
    const [statusClass, setStatusClass] = useState('')
    const selectPlace = (id: number) => {
        console.log(id)
        setIsSelected(!isSelected)
    }

    useEffect(() => {
        if (status) {
            setStatusClass(status)
        }

        if (status !== 'occupied' && isSelected) {
            setStatusClass('active')
        }
    }, [status, isSelected])

    return (
        <div className={'chair ' + statusClass} onClick={() => selectPlace(id)}>
            {id}
        </div>
    )
}

export default Chair