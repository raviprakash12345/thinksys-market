import MarketPlaceGridView from "./view";

const MarketPlaceGrid = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  return (
    <>
      <MarketPlaceGridView
        themeColor={themeColor}
        isDrawerMargin={isDrawerMargin}
      />
    </>
  );
};

export default MarketPlaceGrid;
