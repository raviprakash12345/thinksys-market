import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import IconButton from "@mui/material/IconButton";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CreateIcon from "@mui/icons-material/Create";
import FilterIcon from "@mui/icons-material/Filter";
import ChartArea from "./area-chart";

const HomeView = () => {
  return (
    <>
      <Box sx={{ marginLeft: "250px" }}>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <Box
            sx={{
              border: "1px solid #e35981",
              height: "120px",
              width: "350px",
              borderRadius: "10px",
              backgroundColor: "#e35981",
              color: "white",
              marginTop: "8px",
              padding: "4px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ marginTop: "40px" }} variant="h3">
                  207
                </Typography>
                <Typography variant="body1">Subscribes</Typography>
              </Box>
              <Box sx={{ marginTop: "28px" }}>
                <IconButton>
                  <OndemandVideoIcon
                    sx={{ color: "#e575a7", fontSize: "80px" }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #e35981",
              height: "120px",
              width: "350px",
              borderRadius: "10px",
              color: "#e35981",
              marginTop: "8px",
              padding: "4px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ marginTop: "40px" }} variant="h3">
                  300
                </Typography>
                <Typography variant="body1">Followers</Typography>
              </Box>
              <Box sx={{ marginTop: "28px" }}>
                <IconButton>
                  <CreateIcon sx={{ color: "#e575a7", fontSize: "80px" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #e35981",
              height: "120px",
              width: "350px",
              borderRadius: "10px",
              color: "#e35981",
              marginTop: "8px",
              padding: "4px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ marginTop: "40px" }} variant="h3">
                  67
                </Typography>
                <Typography variant="body1">Total Posts</Typography>
              </Box>
              <Box sx={{ marginTop: "28px" }}>
                <IconButton>
                  <PeopleAltIcon sx={{ color: "#e575a7", fontSize: "80px" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #e35981",
              height: "120px",
              width: "350px",
              borderRadius: "10px",
              color: "#e35981",
              marginTop: "8px",
              padding: "4px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ marginTop: "40px" }} variant="h3">
                  70
                </Typography>
                <Typography variant="body1">Total Articles</Typography>
              </Box>
              <Box sx={{ marginTop: "24px" }}>
                <IconButton>
                  <FilterIcon sx={{ color: "#e575a7", fontSize: "80px" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: "48px" }}>
          <ChartArea />
        </Box>
      </Box>
    </>
  );
};

export default HomeView;
