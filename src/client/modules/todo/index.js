import { useState } from "react";
import TodoView from "./view";

const defaultState = {};

const Todo = ({
  isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
}) => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <TodoView
        isDrawerMargin={isDrawerMargin}
        themeColor={themeColor}
        lightColor={lightColor}
      />
    </>
  );
};

export default Todo;
