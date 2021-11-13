import './pay.scss'

const Pay: React.FC = () => {
    return (
        <div className="card">
            <div className="card__header">
                <div className="card__icon"></div>
                <span className="card__title">SuperCard</span>
            </div>
            <div className="card__number">
                <span>1234</span>
                <span>1234</span>
                <span>1234</span>
                <span>1234</span>
            </div>
            <div className="card__details">
                <span>Opoznanniy Enot</span>
                <span>20/33</span>
            </div>
        </div>
    )
}

export default Pay