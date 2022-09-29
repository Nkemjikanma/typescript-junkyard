import React from "react";
import { edit, bin, done } from "../assets";
import { Todo } from "../constants/model";

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function SingleTodo({ index, todo, todos, setTodos }: Props) {
  return (
    <form className="bg-todo-list mt-7 h-[50px] py-6 px-3 bg-slate-300 shadow-inner flex flex-row items-center justify-between rounded-md">
      <h3 className="text-2xl font-thin">{todo.todo}</h3>
      <div className="flex flex-row gap-2">
        <img
          src={edit}
          alt={"edit"}
          className="h-7 rounded-sm hover:scale-[1.2] transition-all"
        />
        <img
          src={bin}
          alt={"edit"}
          className="h-7 rounded-sm hover:scale-[1.2] transition-all"
        />
        <img
          src={done}
          alt={"edit"}
          className="h-7 rounded-sm hover:scale-[1.2] transition-all"
        />
      </div>
    </form>
  );
}

export default SingleTodo;
