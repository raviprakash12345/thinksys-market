import TopHeadingView from "./view";

const TopHeading = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  return (
    <>
      <TopHeadingView themeColor={themeColor} isDrawerMargin={isDrawerMargin} />
    </>
  );
};

export default TopHeading;
