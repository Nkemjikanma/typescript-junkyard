import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addToTodos: (e: React.FormEvent) => void;
}

export default function InputField({ todo, setTodo, addToTodos }: Props) {
  //console.log(todo);

  //const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <form
      className="container w-[500px]  border-1 border-black flex flex-row bg-none relative items-center overflow-clip p-5"
      onSubmit={(e) => {
        addToTodos(e);
        //inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter Todo"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="todo_text_field w-full h-12 border-none shadow-md rounded-xl overflow-clip placeholder:ml-5 focus:outline-none focus:border-slate-600 focus:ring-slate-600 focus:ring-2 pl-[10px] transition"
      />
      <button
        className="px-[5px] py-[3px] bg-gray-900 text-white rounded-[50%] absolute right-7 shadow-sm rotate-90 hover:rotate-0 hover:bg-gray-700 active:shadow-lg active:scale-80 transition-transform"
        type="submit"
      >
        do
      </button>
    </form>
  );
}

//or
// const InputField: React.FC<Props> = ({todo, setTodo}) => {}
