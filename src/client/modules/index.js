import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "@client/shared/components";

import Home from "./home";

const App = () => {
  let drawerList = [];

  return (
    <DefaultLayout drawerList={drawerList}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DefaultLayout>
  );
};

export default App;
