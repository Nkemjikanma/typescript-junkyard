import React, { useState } from "react";
import { edit, bin, done } from "../assets";
import { Todo } from "../constants/model";

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function SingleTodo({ index, todo, todos, setTodos }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  function handleAction(idx: number, id: number) {
    /**
     * * idx === 2 => done was clicked
     * * idx === 1 => delete was clicked
     */
    if (idx === 2) {
      console.log(`You clicked done `);
      setTodos(
        todos.map((prevTodo) => {
          return prevTodo.id === id
            ? { ...prevTodo, isDone: !todo.isDone }
            : todo;
        })
      );
    }
    if (idx === 1) {
      // loop through the todos, and setTodos to every todo except the todo with the id
      setTodos((previousTodos) => {
        return previousTodos.filter((prevTodo) => prevTodo.id !== id);
      });
    }
  }
  const icons = [edit, bin, done];
  return (
    <form className="bg-todo-list mt-7 h-[50px] py-6 px-3 bg-slate-300 shadow-inner flex flex-row items-center justify-between rounded-md">
      {todo.isDone ? (
        <h3 className="text-2xl font-thin line-through text-slate-500">
          {todo.todo}
        </h3>
      ) : (
        <h3 className="text-2xl font-thin">{todo.todo}</h3>
      )}

      <div className="flex flex-row gap-2">
        {icons.map((icon, index) => {
          return (
            <img
              key={index}
              src={icon}
              alt={index.toString()}
              className="h-7 rounded-sm hover:scale-[1.1] transition-all hover:rotate-[360deg] cursor-pointer"
              onClick={() => handleAction(index, todo.id)}
            />
          );
        })}
      </div>
    </form>
  );
}

export default SingleTodo;
