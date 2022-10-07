import { interfacemodel } from '../constants/interfacemodel';
import { useState } from 'react';

interface Props {
    id: string;
    value: number;
    isHeld: boolean;
    dices: interfacemodel[];
    setDices: React.Dispatch<React.SetStateAction<interfacemodel[]>>;
    holdDice: Function;
}

const Die = ({ id, value, isHeld, dices, setDices, holdDice }: Props) => {
    const [currentIsHeld, setCurrentIsHeld] = useState(isHeld);
    const handleHoldDice = (
        event: React.FormEvent,
        id: string,
        isHeld: boolean
    ) => {
        setCurrentIsHeld(!currentIsHeld);
        holdDice(id, currentIsHeld);
    };
    return (
        <div
            onClick={(event) => handleHoldDice(event, id, isHeld)}
            className={`shadow-xl shadow-slate-400 rounded-lg ${
                isHeld ? 'bg-green-500 text-white' : 'bg-white'
            }  border-1 border-black w-14 h-14 flex flex-row justify-center items-center hover:cursor-pointer font-tenzies`}
        >
            <h2 className="font-bold text-2xl">{value}</h2>
        </div>
    );
};

export default Die;
