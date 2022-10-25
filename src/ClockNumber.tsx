// Components

// Redux

// Utils

// Types
import { Position } from './App';
import Clock from './Clock';

interface Props {
    number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

const ClockNumber: React.FC<Props> = ({ number }) => {
    const getInstructions = (): Position[] => {
        switch (number) {
            case 1:
                return ['hide', 'bottom', 'hide', 'up-down', 'hide', 'top'];
            case 2:
                return ['right', 'bottom-left', 'bottom-right', 'top-left', 'top-right', 'left'];
            case 3:
                return ['right', 'bottom-left', 'right', 'top-left', 'right', 'top-left'];
            case 4:
                return ['bottom', 'bottom', 'top-right', 'up-down', 'hide', 'top'];
            case 5:
                return ['bottom-right', 'left', 'top-right', 'bottom-left', 'right', 'top-left'];
            case 6:
                return ['bottom-right', 'left', 'up-down', 'bottom-left', 'top-right', 'top-left'];
            case 7:
                return ['right', 'bottom-left', 'hide', 'up-down', 'hide', 'top'];
            case 8:
                return ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'top-right', 'top-left'];
            case 9:
                return ['bottom-right', 'bottom-left', 'top-right', 'bottom-left', 'right', 'top-left'];
            default:
                return ['bottom-right', 'bottom-left', 'up-down', 'up-down', 'top-right', 'top-left'];
        }
    };
    return (
        <div className='grid grid-cols-2 gap-2 lg:gap-4'>
            {getInstructions().map((position) => (
                <Clock position={position} />
            ))}
        </div>
    );
};

export default ClockNumber;
