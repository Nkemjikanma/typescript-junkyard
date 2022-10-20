import Select from './Components/Select';

const options = [
    { label: 'First', value: 1 },
    { label: 'Second', value: 2 },
    { label: 'Third', value: 3 },
    { label: 'Fourth', value: 4 },
    { label: 'Fifth', value: 5 },
];
function App() {
    function handleChange() {}
    return (
        <section className="w-full h-screen bg-slate-600 flex flex-col justify-center items-center">
            <Select options={options} onChange={handleChange} />
        </section>
    );
}

export default App;
