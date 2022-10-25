// Types
import { Position } from './App';

interface Props {
    position: Position;
}

const Clock: React.FC<Props> = ({ position }) => {
    const getRotation = () => {
        switch (position) {
            case 'top-right':
                return { hour: 0, min: 270 };
            case 'top-left':
                return { hour: 270, min: 180 };
            case 'bottom-left':
                return { hour: 90, min: 180 };
            case 'bottom-right':
                return { hour: 0, min: 90 };
            case 'up-down':
                return { hour: 90, min: 270 };
            case 'down-up':
                return { hour: 270, min: 90 };
            case 'top':
                return { hour: 270, min: 270 };
            case 'right':
                return { hour: 0, min: 0 };
            case 'bottom':
                return { hour: 90, min: 90 };
            case 'left':
                return { hour: 180, min: 180 };
            case 'hide':
                return { hour: 135, min: 135 };
            default:
                return { hour: 0, min: 0 };
        }
    };

    return (
        <div className='aspect-square w-full rounded-full shadow-inner-lg bg-gray-100'>
            <svg className='w-full h-full stroke-gray-700'>
                <line
                    x1='0'
                    y1='0'
                    x2='45%'
                    y2='0'
                    strokeWidth={'7%'}
                    strokeLinecap='round'
                    className='transition-transform drop-shadow-md'
                    style={{ transitionDuration: '4s', transform: `translate(50%, 50%) rotate(${getRotation().min}deg)` }}
                />
                <line
                    x1='0'
                    y1='0'
                    x2='40%'
                    y2='0'
                    strokeWidth={'7%'}
                    strokeLinecap='round'
                    className='transition-transform drop-shadow-md'
                    style={{ transitionDuration: '4s', transform: `translate(50%, 50%) rotate(${getRotation().hour}deg)` }}
                />
            </svg>
        </div>
    );
};

export default Clock;
