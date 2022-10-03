import React from "react";
import { Todo } from "../constants/model";
import SingleTodo from "./SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <section className="border border-1 border-black w-[80%] h-full">
      <div className="todos">
        {todos.length === 0
          ? ""
          : todos.map((todo, index) => {
              return (
                <SingleTodo
                  key={todo.id}
                  index={index}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                />
              );
            })}
      </div>
    </section>
  );
};

export default TodoList;
