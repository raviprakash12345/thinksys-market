import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Home from "../home";
import ChartArea from "../shared/area-chart";
import ChartBar from "../shared/bar-chart";

const AnalyticsView = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  return (
    <>
      <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
        <ChartArea themeColor={themeColor} isDrawerMargin={isDrawerMargin} />
        <Box sx={{ marginTop: "48px" }}>
          <ChartBar themeColor={themeColor} isDrawerMargin={isDrawerMargin} />
        </Box>
      </Box>
    </>
  );
};

export default AnalyticsView;
