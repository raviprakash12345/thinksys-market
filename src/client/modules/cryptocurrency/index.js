import { useState } from "react";
import CryptocurrencyView from "./view";
const defaultState = {
  isSearchBox: false,
};
const Cryptocurrency = ({ themeColor = "#e35981" }) => {
  const [state, setState] = useState(defaultState);
  const handleSearch = () => {
    setState((prevState) => ({
      ...prevState,
      isSearchBox: state.isSearchBox ? false : true,
    }));
  };
  return (
    <>
      <CryptocurrencyView
        themeColor={themeColor}
        handleSearch={handleSearch}
        isSearchBox={state.isSearchBox}
      />
    </>
  );
};

export default Cryptocurrency;
