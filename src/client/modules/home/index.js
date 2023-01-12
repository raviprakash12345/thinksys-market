import { useState } from "react";
import HomeView from "./view";

const defaultState = {};

const Home = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <HomeView themeColor={themeColor} isDrawerMargin={isDrawerMargin} />
    </>
  );
};

export default Home;
