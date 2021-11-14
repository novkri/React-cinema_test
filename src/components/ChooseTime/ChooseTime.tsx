import './choose.css'
import { useParams } from 'react-router-dom'
import Chair from '../Chair/Chair'
import { useEffect, useState } from 'react'
import TimeButton from '../TimeButton/TimeButton'
import Slider from '../Slider/Slider'
import { Place, Types } from '../../assets/globalVariables'

interface dateTime {
    date: string
    type: Types
    time: string
    placeId: number
    placeRow: number
}

interface ChooseTimeProps {
    renderTicket: (v: dateTime) => void
}

enum Statuses {
    free = 'free',
    occupied = 'occupied',
}

const ChooseTime: React.FC<ChooseTimeProps> = ({ renderTicket }) => {
    let params = useParams()
    const [time, setTime] = useState('')
    const [type, setType] = useState(Types.unset)
    const [date, setDate] = useState('')
    const [place, setPlace] = useState({ id: 0, row: 0 })

    const timeBtns2d = ['12:00 - 13:30', '16:30 - 18:00', '20:00 - 21:30']
    const timeBtns3d = ['10:00 - 11:30', '21:00 - 22:30']
    const _places = [
        {
            id: 1,
            row: 1,
            status: Statuses.free,
        },
        {
            id: 2,
            row: 1,
            status: Statuses.free,
        },
        {
            id: 3,
            row: 1,
            status: Statuses.occupied,
        },
        {
            id: 4,
            row: 1,
            status: Statuses.free,
        },
        {
            id: 5,
            row: 1,
            status: Statuses.occupied,
        },
        {
            id: 1,
            row: 2,
            status: Statuses.free,
        },
        {
            id: 2,
            row: 2,
            status: Statuses.occupied,
        },
        {
            id: 3,
            row: 2,
            status: Statuses.free,
        },
        {
            id: 4,
            row: 2,
            status: Statuses.free,
        },
        {
            id: 5,
            row: 2,
            status: Statuses.occupied,
        },
        {
            id: 6,
            row: 2,
            status: Statuses.occupied,
        },
        {
            id: 7,
            row: 2,
            status: Statuses.free,
        },
        {
            id: 8,
            row: 2,
            status: Statuses.free,
        },
        {
            id: 9,
            row: 2,
            status: Statuses.occupied,
        },
    ]

    const selectTime = (timeString: string, types: Types) => {
        setTime(timeString)
        setType(types)
    }

    useEffect(() => {
        if (time && type && date && place.id) {
            console.log(time, type, date, place)
            renderTicket({
                time,
                type,
                date,
                placeId: place.id,
                placeRow: place.row,
            })
        }
    }, [time, type, date, place])

    return (
        <div>
            <Slider selectedDate={date} handleClick={(v) => setDate(v)} />

            <div className={'timeRow'}>
                <span>2D</span>

                {timeBtns2d.map((timeItem) => (
                    <TimeButton
                        key={timeItem}
                        isSelected={time === timeItem}
                        timeString={timeItem}
                        handleClick={(timeString: string) =>
                            selectTime(timeString, Types.twod)
                        }
                    />
                ))}
            </div>

            <div className={'timeRow three-d'}>
                <span>3D</span>
                {timeBtns3d.map((timeItem) => (
                    <TimeButton
                        key={timeItem}
                        isSelected={time === timeItem}
                        timeString={timeItem}
                        handleClick={(timeString: string) =>
                            selectTime(timeString, Types.threed)
                        }
                    />
                ))}
            </div>
            <div>
                <div className={'screen'}>
                    <span>Экран</span>
                </div>
                <div className={'row'}>
                    <span>Ряд 1</span>
                    <div className={'chairsRow'}>
                        {_places
                            .filter((item) => item.row === 1)
                            .map((item) => (
                                <Chair
                                    status={item.status}
                                    id={item.id}
                                    key={item.id + item.row}
                                    isSelected={
                                        item.id === place.id &&
                                        item.row === place.row
                                    }
                                    handleSelectPlace={(id) =>
                                        setPlace({ id, row: item.row })
                                    }
                                />
                            ))}
                    </div>
                </div>
                <div className={'row'}>
                    <span>Ряд 2</span>
                    <div className={'chairsRow'}>
                        {_places
                            .filter((item) => item.row === 2)
                            .map((item) => (
                                <Chair
                                    status={item.status}
                                    id={item.id}
                                    key={item.id + item.row}
                                    isSelected={
                                        item.id === place.id &&
                                        item.row === place.row
                                    }
                                    handleSelectPlace={(id) =>
                                        setPlace({ id, row: item.row })
                                    }
                                />
                            ))}
                    </div>
                </div>
                <div className={'info-p'}>
                    <div className={'info-p__place'}>
                        <div className={'indicator occupied'} />
                        <span>Место занято</span>
                    </div>
                    <div className={'info-p__place'}>
                        <div className={'indicator free'} />
                        <span>Место свободно</span>
                    </div>
                    <div className={'info-p__place'}>
                        <div className={'indicator active'} />
                        <span>Выбранное место</span>
                    </div>
                </div>
            </div>
            {/*<h2>Invoice: {params.invoiceId}</h2>*/}
        </div>
    )
}

export default ChooseTime