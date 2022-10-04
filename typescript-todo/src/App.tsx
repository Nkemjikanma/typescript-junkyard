import React from "react";
import { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./constants/model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      complete = completedTodos;
    console.log("add", add);
    console.log("active", active);
    console.log("complete", completedTodos);

    /**
     * * Source logic
     */
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);

      setTodos(
        todos.map((prevTodo) => {
          return prevTodo.id === source.index
            ? { ...prevTodo, isDone: !prevTodo.isDone }
            : prevTodo;
        })
      );
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    console.log(todos);
    /**
     * * Destination logic
     */
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  //console.log(todos);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="h-screen w-full bg-white flex flex-row justify-center items-center font-monserat px-3 ">
        <div className="w-[650px] h-[700px] bg-slate-200 px-6 py-4 rounded-xl flex flex-col items-center">
          <h1 className="text-center text-2xl font-bold z-1 mb-4 md:mb-8 md:text-3xl sm">
            Today's todo
          </h1>
          <InputField todo={todo} setTodo={setTodo} addToTodos={addToTodos} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;
