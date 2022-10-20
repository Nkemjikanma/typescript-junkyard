import { useState } from 'react';
import caret from '../assets/caret.svg';

type SelectOption = {
    label: string;
    value: any;
};

type SelectProps = {
    options: SelectOption[];
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
};

export default function Select({ value, onChange, options }: SelectProps) {
    const [show, setShow] = useState<boolean>(true);
    return (
        <section>
            <div
                tabIndex={0}
                className="relative container min-h-[1.5em] w-[20em] border border-1 border-slate-200 flex flex-row items-center gap-2 p-2 rounded-md outline-none focus:border-slate-700"
            >
                <span className="grow">Value</span>
                <button className="w-[20px] h-[20px] bg-none text-slate-400 text-[1.25em] cursor-pointer outline-none flex items-center justify-center rounded-sm focus:text-slate-100 hover:text-slate-100 hover:scale-105 transition-all">
                    &times;
                </button>
                <div className="divider text-slate-400 w-[0.1em] self-stretch border border-1 border-slate-200"></div>
                <div className="caret">
                    <img className="rotate-[g]" src={caret} alt="" />
                </div>
                <ul
                    className={`options border border-1 border-slate-200 rounded-md w-[100%] top-[110%] left-0 absolute max-h-[15em] overflow-y-auto m-0 p-0 list-none  ${
                        show ? 'block' : 'hidden'
                    }`}
                >
                    {options.map((option) => {
                        return (
                            <li key={option.label} className="option">
                                {option.label}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
