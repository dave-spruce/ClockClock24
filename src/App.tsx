import { useEffect, useState } from 'react';
import ClockNumber from './ClockNumber';

export type Position = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right' | 'up-down' | 'down-up' | 'top' | 'right' | 'bottom' | 'left' | 'hide';
export type NumberValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

function App() {
    const [timeValues, setTimeValues] = useState<NumberValues[]>([0, 0, 0, 0]);

    const getTime = () => {
        let date = new Date();

        let hh = date.getHours().toString(),
            mm = date.getMinutes().toString();

        if (parseInt(mm) < 10) mm = `0${mm}`;

        const timeArr = [parseInt(hh.charAt(0)), parseInt(hh.charAt(1)), parseInt(mm.charAt(0)), parseInt(mm.charAt(1))];
        setTimeValues(timeArr as NumberValues[]);
    };

    useEffect(() => {
        const interval = setInterval(getTime, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <main className='bg-gray-100 h-full grid place-items-center overflow-hidden p-4 md:p-8'>
            <div className='container grid grid-cols-4 gap-2 lg:gap-4 bg-gray-50 shadow-2xl p-8 xl:p-16'>
                <ClockNumber number={timeValues[0]} />
                <ClockNumber number={timeValues[1]} />
                <ClockNumber number={timeValues[2]} />
                <ClockNumber number={timeValues[3]} />
            </div>
        </main>
    );
}

export default App;
