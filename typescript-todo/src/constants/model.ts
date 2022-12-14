export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

//it takes state and actions
// state is the array of todos

/*type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now, todo: action.payload, isDone: false }];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "done":
      return state.map((todo) => todo.id !== action.payload ? {...todo, isDone:!todo.isDone}) ;
    default:
      return state;
  }

};

import React, { useReducer } from "react";

type Props = {};

const model = (props: Props) => {
  const [state, dispatch] = useReducer(TodoReducer, []);
  return <div>model</div>;
};

export default model;
*/
