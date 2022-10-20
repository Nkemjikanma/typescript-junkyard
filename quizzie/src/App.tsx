import { useState } from 'react';
import { interfaceModel, innerQuestions } from './constants/interfaceModel';
import Questions from './components/Questions';

function App() {
    //TODO: Create a type for the useState
    const [fromApi, setFromApi] = useState<interfaceModel[]>([]);
    const [selected, setSelected] = useState<boolean>(false);
    const [ourQuestions, setOurQuestions] = useState<innerQuestions[]>([]);
    //const fromApi = false;

    const fetchQuiz = async () => {
        //* Fetch questions from API
        const rawQuestions = await fetch(
            'https://opentdb.com/api.php?amount=5&type=multiple'
        );
        const questionsData = await rawQuestions.json();

        //* Put the collected data into state
        setFromApi(questionsData['results']);

        //TODO: FIX THIS SHITTTT
        //! Fix shittttt
        //* Create new state from the collected data, so we can process it how we want
        setOurQuestions((prevQuestions) => {
            return [
                ...prevQuestions,
                fromApi.map((eachApiQuestion: interfaceModel) => {
                    return {
                        question: eachApiQuestion.question,
                        options: [
                            ...eachApiQuestion.incorrect_answers,
                            eachApiQuestion.correct_answer,
                        ],
                        correct_answer: eachApiQuestion.correct_answer,
                        incorrect_answers: eachApiQuestion.incorrect_answers,
                        answered: false,
                    };
                }),
            ];
        });
        /*fromApi.map((questioning) =>
            setOurQuestions((prevQuestions) => {
                return [
                    ...prevQuestions,
                    {
                        question: questioning.question,
                        options: [
                            ...questioning.incorrect_answers,
                            questioning.correct_answer,
                        ],
                        correct_answer: questioning.correct_answer,
                        incorrect_answers: questioning.incorrect_answers,
                        answered: false,
                    },
                ];
            })
        );*/
    };

    /*const getQuestions = () => {
        fromApi.map((questioning, index) => {
            return setOurQuestions((prevQuestions): innerQuestions[] => {
                return [
                    ...prevQuestions,
                    {
                        question: questioning.question,
                        options: [
                            ...questioning.incorrect_answers,
                            questioning.correct_answer,
                        ],
                        correct_answer: questioning.correct_answer,
                        incorrect_answers: questioning.incorrect_answers,
                        answered: false,
                    },
                ];
            });
        });
    };*/

    const startQuiz = (): any => {
        console.log('clicked');
        fetchQuiz().catch(console.error);
        //getQuestions();
    };

    console.log('api oo-', fromApi);
    console.log('our qs o-', ourQuestions);
    return (
        <div className="app flex items-center">
            <div className="layout bg-slate-50 flex items-center justify-center">
                <div className="layoutContent w-[36rem] h-[35rem] bg-indigo-200 relative flex justify-center items-center overflow-hidden z-[1] ">
                    <div className="absolute w-[150px] h-[120px] bg-orange-200 rounded-[35px] rotate-[45deg] top-[-40px] right-[-45px] z-2"></div>
                    <div className="absolute w-[150px] h-[120px] bg-indigo-300 rounded-[35px] rotate-[7deg] bottom-[-25px] left-[-35px] z-3"></div>
                    {fromApi.length === 0 ? (
                        <div className="welcomeDiv w-25 h-30 text-center">
                            <p className="h2 text-sky-900">Quizzie</p>
                            <p className="p sometext mt-1">
                                Some description if needed
                            </p>
                            <button
                                className="mt-5 px-12 py-2 bg-sky-900 rounded-lg text-white transform-all"
                                onClick={startQuiz}
                            >
                                Start quiz
                            </button>
                        </div>
                    ) : (
                        <div className="z-20 w-[70%] h-[80%] flex flex-row justify-center items-center ">
                            <Questions
                                ourQuestions={ourQuestions}
                                setOurQuestions={setOurQuestions}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
