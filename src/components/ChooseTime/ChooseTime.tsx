import './choose.css'
import { useParams } from 'react-router-dom'
import Chair from '../Chair/Chair'
import { useState } from 'react'
import TimeButton from '../TimeButton/TimeButton'
import Slider from '../Slider/Slider'

const enum Types {
    twod = '2d',
    threed = '3d',
}

const ChooseTime: React.FC = () => {
    let params = useParams()
    const [time, setTime] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')

    const timeBtns2d = ['12:00 - 13:30', '16:30 - 18:00', '20:00 - 21:30']
    const timeBtns3d = ['10:00 - 11:30', '21:00 - 22:30']

    const selectTime = (timeString: string, types: Types) => {
        setTime(time)
        setType(types)
    }

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
                        <Chair id={1} status={'free'} />
                        <Chair id={3} status={'free'} />
                        <Chair id={3} status={'occupied'} />
                        <Chair id={1} status={'free'} />
                        <Chair id={3} status={'occupied'} />
                    </div>
                </div>
                <div className={'row'}>
                    <span>Ряд 2</span>
                    <div className={'chairsRow'}>
                        <Chair id={1} status={'free'} />
                        <Chair id={3} status={'free'} />
                        <Chair id={3} status={'occupied'} />
                        <Chair id={1} status={'free'} />
                        <Chair id={3} status={'free'} />
                        <Chair id={3} status={'occupied'} />
                        <Chair id={1} status={'free'} />
                        <Chair id={3} status={'free'} />
                        <Chair id={3} status={'occupied'} />
                    </div>
                </div>
                <div className={'info'}>
                    <div className={'info__place'}>
                        <div className={'indicator occupied'} />
                        <span>Место занято</span>
                    </div>
                    <div className={'info__place'}>
                        <div className={'indicator free'} />
                        <span>Место свободно</span>
                    </div>
                    <div className={'info__place'}>
                        <div className={'indicator active'} />
                        <span>Выбранное место</span>
                    </div>
                </div>
            </div>
            <h2>Invoice: {params.invoiceId}</h2>
        </div>
    )
}

export default ChooseTime