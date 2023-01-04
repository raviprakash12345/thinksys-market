import { useState } from "react";
import HomeView from "./view";

const defaultState = {};

const Home = () => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <HomeView />
    </>
  );
};

export default Home;
