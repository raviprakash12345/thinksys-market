import { useState } from "react";
import TodoView from "./view"; 

const defaultState = {};

const Todo = () => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <TodoView />
    </>
  );
};

export default Todo;