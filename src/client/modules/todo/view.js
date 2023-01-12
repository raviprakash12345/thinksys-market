import { Box } from "@mui/system";
import { Typography, IconButton } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

const TodoView = ({ isDrawerMargin = true }) => {
  return (
    <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "#b22362" }} variant="h4">
          Todo
        </Typography>
        <Typography sx={{ marginLeft: "16px" }} variant="body1">
          App / Pages / Todo
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fbe4ec",
          padding: 3,
          borderRadius: "12px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            <IconButton
              sx={{
                border: "1px solid white",
                backgroundColor: "white",
                borderRadius: "30px",
              }}
            >
              <PlaylistAddCheckIcon sx={{ color: "red" }} fontSize="large" />
            </IconButton>
            <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
              <Typography
                variant="caption"
                sx={{ fontSize: "20px", color: "#ae3958" }}
              >
                To Do Apps
              </Typography>
              <Typography>
                󠁥󠁮󠁧󠁿All Your to do list. Just check it whenever You done.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TodoView;
