import React from "react";
import { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./constants/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToTodos = (e: React.FormEvent) => {
    e.preventDefault();

    if (todos) {
      setTodos((previousTodos: Todo[]) => {
        return [
          ...previousTodos,
          { id: Date.now(), todo: todo, isDone: false },
        ];
      });
      setTodo("");
    }
  };

  //console.log(todos);
  return (
    <div className="h-screen w-full bg-white flex flex-row justify-center items-center font-monserat px-3 ">
      <div className="w-[650px] h-[700px] bg-slate-200 px-6 py-4 rounded-xl flex flex-col items-center">
        <h1 className="text-center text-2xl font-bold z-1 mb-4 md:mb-8 md:text-3xl sm">
          Today's todo
        </h1>
        <InputField todo={todo} setTodo={setTodo} addToTodos={addToTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
