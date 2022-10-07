import React from 'react';
import Confetti from 'react-confetti';

interface Props {
    rollDice(): any;
    tenzies: boolean;
    resetGame(): void;
}

const Button: React.FC<Props> = ({ rollDice, tenzies, resetGame }) => {
    return (
        <div>
            {tenzies ? (
                <div>
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                    />
                    <h3>Congratulations!! </h3>
                    <button
                        onClick={resetGame}
                        className={`font-tenzies mt-5 w-[8rem] h-[3rem] bg-slate-700 rounded-lg text-white text-2xl hover:scale-102 hover:bg-slate-400 active:shadow-inner outline:none transition-all`}
                    >
                        Reset
                    </button>
                </div>
            ) : (
                <button
                    onClick={rollDice}
                    className={`font-tenzies mt-5 w-[8rem] h-[3rem] bg-slate-700 rounded-lg text-white text-2xl hover:scale-102 hover:bg-slate-400 active:shadow-inner outline:none transition-all`}
                >
                    Roll Dice
                </button>
            )}
        </div>
    );
};

export default Button;
