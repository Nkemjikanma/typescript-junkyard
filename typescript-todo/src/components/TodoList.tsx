import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../constants/model";
import SingleTodo from "./SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <section className="flex flex-row w-[100%] border-1 border-black w-[80%] h-full justify-between">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`w-[95%] incomplete--tasks p-2 ${
              snapshot.isDraggingOver ? "shadow:xl" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="text-center uppercase">Active Tasks</h3>
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
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="CompletedList">
        {(provided, snapshot) => (
          <div
            className={`w-[95%] incomplete--tasks p-2 ${
              snapshot.isDraggingOver ? "dragcomplete" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="text-center uppercase">Completed Tasks</h3>
            <div className="todos">
              {completedTodos.length === 0
                ? ""
                : completedTodos.map((todo, index) => {
                    return (
                      <SingleTodo
                        key={todo.id}
                        index={index}
                        todo={todo}
                        todos={completedTodos}
                        setTodos={setCompletedTodos}
                      />
                    );
                  })}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </section>
  );
};

export default TodoList;
