import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Calendar from "react-calendar";
import { useState } from "react";
import { Paper } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import { useLocation } from "react-router-dom";
const StatusView = ({ isDrawerMargin = true, themeColor = "#e35981" }) => {
  const [date, setDate] = useState(new Date());
  const onChange = () => {
    setDate(date);
  };
  const currentPath = useLocation();
  return (
    <>
      <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#b22362" }} variant="h4">
            Status
          </Typography>
          <Typography sx={{ marginLeft: "16px" }} variant="body1">
            {currentPath.pathname.split("/")[1] +
              " / " +
              currentPath.pathname.split("/")[2]}
          </Typography>
        </Box>
        <Paper>
          <Box
            sx={{ padding: "16px", width: "98%", background: "#fafafa" }}
            elevation={1}
          >
            <Box sx={{ padding: "8px", marginLeft: "40%" }}>
              <Calendar
                defaultValue="year"
                className="react-calendar react-calendar--selectRange"
                onChange={onChange}
                value={date}
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default StatusView;
