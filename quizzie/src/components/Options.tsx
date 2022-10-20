import React from 'react';

type Props = {
    option: string;
    index: number;
    selected: boolean;
    selectAnswer: any;
};

const Options = ({ option, selectAnswer, selected, index }: Props) => {
    return (
        <p
            className="border border-1 px-2 text-[10px] text-center flex justify-center items-center inline-block min-w-[20px] w-[60%] max-h-[35px] h-[90%] rounded-xl border-1 border-indigo-800 mt-2 hover:bg-indigo-300 hover:cursor-pointer"
            onClick={(event) => selectAnswer(event, index)}
        >
            {option}
        </p>
    );
};

export default Options;
