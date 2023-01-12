import { useState } from "react";
import MarketingView from "./view"; 

const defaultState = {};

const Marketing = ({isDrawerMargin = true}) => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <MarketingView isDrawerMargin={isDrawerMargin} />
    </>
  );
};

export default Marketing;