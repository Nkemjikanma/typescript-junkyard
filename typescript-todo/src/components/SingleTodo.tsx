import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { editBtn, bin, done } from "../assets";
import { Todo } from "../constants/model";

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function SingleTodo({ index, todo, todos, setTodos }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  function handleAction(idx: number, id: number) {
    /**
     * * idx === 2 => done was clicked
     * * idx === 1 => delete was clicked
     */
    // Done
    if (idx === 2) {
      console.log(`You clicked done `);
      setTodos(
        todos.map((prevTodo) => {
          return prevTodo.id === id
            ? { ...prevTodo, isDone: !todo.isDone }
            : prevTodo;
        })
      );
    }
    // Delete
    if (idx === 1) {
      // loop through the todos, and setTodos to every todo except the todo with the id
      setTodos((previousTodos) => {
        return previousTodos.filter((prevTodo) => prevTodo.id !== id);
      });
    }

    // edit the text of existing todo
    if (idx === 0) {
      console.log(edit);
      if (!todo.isDone) {
        setEdit((prevEdit) => !prevEdit);
      }
    }
  }

  function handleEditButton(e: React.FormEvent, id: number) {
    e.preventDefault();

    setTodos((previousTodos) => {
      return previousTodos.map((prevTodo) =>
        prevTodo.id == id ? { ...prevTodo, todo: editTodo } : prevTodo
      );
    });
    setEdit(false);
  }

  const icons = [editBtn, bin, done];
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`border-1 border-red-400 bg-todo-list mt-7 h-[50px] py-6 px-3 bg-slate-100 shadow-inner flex flex-row items-center justify-between rounded-md transition-all hover:shadow-xl hover:scale-105 ${
            snapshot.isDragging ? "shadow:xl bg-slate-500" : ""
          }`}
          onSubmit={(event) => handleEditButton(event, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {
            // Conditionally rendering the input field is edit is true
            edit ? (
              <input
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                className="todo_text_field w-[60%] h-7 rounded-md overflow-clip placeholder:ml-5 focus:outline-none focus:border-slate-600 focus:ring-slate-600 focus:ring-2 pl-[10px] transition"
              />
            ) : todo.isDone ? (
              <h3 className=" font-thin line-through text-slate-500">
                {todo.todo}
              </h3>
            ) : (
              <h3 className="font-thin">{todo.todo}</h3>
            )
          }

          <div className="flex flex-row gap-2">
            {icons.map((icon, index) => {
              return (
                <img
                  key={index}
                  src={icon}
                  alt="buttons"
                  className="h-5 w-5 outline-none rounded-sm hover:scale-[1.1] transition-all hover:rotate-[360deg] cursor-pointer"
                  onClick={() => handleAction(index, todo.id)}
                />
              );
            })}
          </div>
        </form>
      )}
    </Draggable>
  );
}
