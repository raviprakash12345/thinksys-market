import { useState } from "react";
import EmailView from "./view";

const defaultState = {};

const Email = ({ isDrawerMargin = true  ,themeColor = "#e35981",}) => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <EmailView isDrawerMargin={isDrawerMargin} themeColor={themeColor} />
    </>
  );
};

export default Email;
