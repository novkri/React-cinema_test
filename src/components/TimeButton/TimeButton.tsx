import './time-button.css'

interface TimeButtonProps {
    isSelected: boolean
    timeString: string
    handleClick: (timeString: string) => void
}
const TimeButton: React.FC<TimeButtonProps> = ({
    isSelected,
    timeString,
    handleClick,
}) => {
    return (
        <button
            className={'time-btn' + (isSelected ? ' active' : '')}
            onClick={() => handleClick(timeString)}
        >
            {timeString}
        </button>
    )
}

export default TimeButton