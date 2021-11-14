import './slider.css'
import { useEffect, useState } from 'react'

interface SliderProps {
    selectedDate: string
    handleClick: (id: string) => void
}

const Slider: React.FC<SliderProps> = ({ selectedDate, handleClick }) => {
    const slideWidth = 33

    const _items = [
        {
            player: {
                title: '23 сентября',
                desc: 'пятница',
            },
        },
        {
            player: {
                title: '24 сентября',
                desc: 'пятница',
            },
        },
        {
            player: {
                title: '25 сентября',
                desc: 'пятница',
            },
        },
        {
            player: {
                title: '26 сентября',
                desc: 'пятница',
            },
        },
        {
            player: {
                title: '27 сентября',
                desc: 'пятница',
            },
        },
    ]

    const length = _items.length
    _items.push(..._items)

    const sleep = (ms = 0) => {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    const createItem = (position: number, idx: number) => {
        const item = {
            styles: {
                transform: `translateX(${position * slideWidth}rem)`,
            },
            player: _items[idx].player,
        }

        switch (position) {
            case length - 1:
            case length + 1:
                item.styles = { ...item.styles }
                break
            case length:
                break
            default:
                // @ts-ignore
                item.styles = { ...item.styles, opacity: 1 }
                break
        }

        return item
    }

    // @ts-ignore
    const CarouselSlideItem = ({ pos, idx, selectedDate, handleClick }) => {
        const item = createItem(pos, idx)

        return (
            <li
                className={
                    'carousel__slide-item' +
                    (selectedDate === item.player.title ? ' active' : '')
                }
                style={item.styles}
                onClick={() => handleClick(item.player.title)}
            >
                <div className="carousel-slide-item__body">
                    <span className={'title'}>{item.player.title}</span>
                    <p>{item.player.desc}</p>
                </div>
            </li>
        )
    }

    const keys = Array.from(Array(_items.length).keys())

    const [items, setItems] = useState(keys)
    const [isTicking, setIsTicking] = useState(false)
    const bigLength = items.length

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true)
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength])
            })
        }
    }

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true)
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength]
                )
            })
        }
    }

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false))
    }, [isTicking])

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button
                    className="carousel__btn carousel__btn--prev"
                    onClick={() => prevClick()}
                >
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                selectedDate={selectedDate}
                                handleClick={(v: string) => handleClick(v)}
                            />
                        ))}
                    </ul>
                </div>
                <button
                    className="carousel__btn carousel__btn--next"
                    onClick={() => nextClick()}
                >
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
            </div>
        </div>
    )
}

export default Slider