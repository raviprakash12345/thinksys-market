import { useState } from "react";
import DataTableView from "./view";

const defaultState = {};

const DataTable = ({
  isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
  isTable = false,
}) => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <DataTableView
        isDrawerMargin={isDrawerMargin}
        themeColor={themeColor}
        lightColor={lightColor}
        isTable={isTable}
      />
    </>
  );
};

export default DataTable;