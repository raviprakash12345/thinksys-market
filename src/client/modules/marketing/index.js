import { useState } from "react";
import MarketingView from "./view"; 

const defaultState = {};

const Marketing = () => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <MarketingView />
    </>
  );
};

export default Marketing;