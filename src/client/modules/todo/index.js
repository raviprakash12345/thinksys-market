import { useState } from "react";
import TodoView from "./view"; 

const defaultState = {};

const Todo = ({isDrawerMargin=true}) => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <TodoView isDrawerMargin={isDrawerMargin} />
    </>
  );
};

export default Todo;