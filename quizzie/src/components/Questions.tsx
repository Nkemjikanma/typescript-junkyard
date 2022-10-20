import React, { useState } from 'react';
import { interfaceModel, innerQuestions } from '../constants/interfaceModel';
import Options from './Options';

interface Props {
    ourQuestions: innerQuestions[];
    setOurQuestions: React.Dispatch<React.SetStateAction<innerQuestions[]>>;
    selected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const Questions = ({
    ourQuestions,
    setOurQuestions,
    selected,
    setSelected,
}: Props) => {
    //console.log(fromApi);

    const selectAnswer = (event: React.MouseEvent, id: number): any => {
        console.log(event.currentTarget.parentNode);
        //setSelected((prevSelected) => !prevSelected);
    };

    console.log('questions o-', ourQuestions);

    /*<div
                key={index}
                className={`z-10 p-2 border-b border-1 border-b-stone-400 flex flex-col justify-center `}
            >
                <p className="h4">
                    {question.question.replace(/&quot;/g, '"')}
                </p>
                <div className="flex flex-row gap-1 justify-between w-[100%] max-w-[40rem] mb-2">
                    {[
                        ...question.incorrect_answers,
                        question.correct_answer,
                    ].map((option, index) => (
                        <Options
                            key={index}
                            option={option}
                            index={index}
                            selected={selected}
                            selectAnswer={selectAnswer}
                        />
                    ))}
                </div>
            </div>*/

    return <div className="h-[100%] flex flex-col justify-between">{}</div>;
};

export default Questions;
