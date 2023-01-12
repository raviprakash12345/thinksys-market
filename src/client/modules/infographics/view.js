import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TopHeading from "../shared/top-heading";
import LineChartBox from "../shared/line-chart";

const InfographicsView = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
}) => {
  return (
    <>
      <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#b22362" }} variant="h4">
            Infographics
          </Typography>
          <Typography sx={{ marginLeft: "16px" }} variant="body1">
            App / Dashboard / Infographics
          </Typography>
        </Box>
        <TopHeading themeColor={themeColor} isDrawerMargin={isDrawerMargin} />
        <Box sx={{ marginTop: "32px" }}>
          <TopHeading themeColor={themeColor} isDrawerMargin={isDrawerMargin} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginTop: "32px",
          }}
        >
          <Box>
            <LineChartBox
              themeColor={themeColor}
              isDrawerMargin={isDrawerMargin}
            />
            <LineChartBox
              themeColor={themeColor}
              isDrawerMargin={isDrawerMargin}
            />
          </Box>
          <Box>
            <LineChartBox
              themeColor={themeColor}
              isDrawerMargin={isDrawerMargin}
            />
            <LineChartBox
              themeColor={themeColor}
              isDrawerMargin={isDrawerMargin}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InfographicsView;
