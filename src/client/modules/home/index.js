import { useState } from "react";
import HomeView from "./view";

const defaultState = {};

const Home = ({ themeColor = "#e35981" }) => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <HomeView themeColor={themeColor} />
    </>
  );
};

export default Home;
