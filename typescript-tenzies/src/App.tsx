import React, { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import Die from './components/Die';
import { interfacemodel } from './constants/interfacemodel';
import Button from './components/Button';

const App: React.FC = () => {
    const [dices, setDices] = useState<interfacemodel[]>(allNewDice());
    const [tenzies, setTenzies] = useState<boolean>(false);

    //TODO: Effect to check if dice array has changed
    useEffect(() => {
        console.log('Dice state changed');
        console.log(dices);

        checkWin();
        //first;
    }, [dices]);

    // Checks to see if the user has held all the boxes in the
    function checkWin() {
        const allHeld = dices.every((die) => die.isHeld); // using the .every returns true is all conditions are true
        const allValue = dices.every((die) => die.value === dices[0].value); // checks if every element has the value of die in index 0
        if (allHeld && allValue) {
            setTenzies(true);
        }
    }

    // TODO: Function to generate random numbers between 1 and 7
    function generateNewDie() {
        let individualNum = {
            value: Math.ceil(Math.random() * 7),
            isHeld: false,
            id: nanoid(),
        };
        return individualNum;
    }

    //TODO: Function to create array of numbers generated
    function allNewDice(): any {
        let numArr: {}[] = [];

        for (let i = 0; i < 10; i++) {
            numArr.push(generateNewDie());
        }
        return numArr;
    }

    // TODO: Function to roll the dice
    /**
     * * This function loops through the dices and checks for dice that haven't been held
     * * held dice are ignore while others are regerated
     */
    const rollDice = () => {
        setDices((prevDice) => {
            return prevDice.map((die) => {
                return die.isHeld ? die : generateNewDie();
            });
        });
    };

    //TODO: Callback function to handle change of isHeld
    function holdDice(id: string) {
        setDices((prevDice) => {
            return prevDice.map((die) => {
                return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
            });
        });
    }

    //TODO: Reset to restart the game
    const resetGame = () => {
        setTenzies(false);
        setDices(allNewDice());
    };

    const diceElements = dices.map((die, index) => {
        return (
            <Die
                value={die.value}
                isHeld={die.isHeld}
                id={die.id}
                key={die.id}
                dices={dices}
                setDices={setDices}
                holdDice={holdDice}
            />
        );
    });

    return (
        <main className="w-screen h-screen bg-red-100 flex flex-row justify-center items-center">
            <div className="innner-main w-[60%] h-[50%] bg-slate-800 flex flex-row justify-center items-center">
                <div className="inner-main-content rounded-xl bg-slate-200 h-[90%] w-[90%] flex flex-col justify-center items-center px-8">
                    <h1 className="text-4xl font-bold font-tenzies">Tenzies</h1>
                    <p className="text-[18px] text-center font-tenzies">
                        Roll until all dice are the same. Click each die to
                        freeze it at its current value between rols.
                    </p>
                    <div className="mt-2 border-1 border-black h-[30%] w-full grid gap-3 grid-cols-5 grid-rows-2 items-center place-items-center ">
                        {diceElements}
                    </div>

                    <Button
                        rollDice={rollDice}
                        tenzies={tenzies}
                        resetGame={resetGame}
                    />
                </div>
            </div>
        </main>
    );
};

export default App;
