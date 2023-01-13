import { Box } from "@mui/system";
import { Typography, IconButton, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
let defaultColor = "#e35981";

const EmailView = ({ isDrawerMargin = true, themeColor = "#e35981" }) => {
  function createData(name) {
    return { name };
  }

  const rows = [
    createData("Frozen yoghurt"),
    createData("Ice cream sandwich"),
    createData("Eclair"),
    createData("Cupcake"),
    createData("Gingerbread"),
    createData("Frozen yoghurt"),

    createData("Ice cream sandwich"),
    createData("Eclair"),
    createData("Cupcake"),
    createData("Gingerbread"),
  ];

  return (
    <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "#b22362" }} variant="h4">
          Email
        </Typography>
        <Typography sx={{ marginLeft: "16px" }} variant="body1">
          App / Pages / Email
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f3e5f5",
          padding: 3,
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // backgroundColor: `${!!themeColor ? themeColor : defaultColor}`,

            gap: 10,
          }}
        >
          <Box>
            <Button
              sx={{
                color: "white",
                width: 150,
                mr: 4,
                mt: 0.7,
                backgroundColor: `${!!themeColor ? themeColor : defaultColor}`,
              }}
            >
              COMPOSE EMAIL
            </Button>
          </Box>
          <Box sx={{ ml: 5 }}>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: 1400,
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Email"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                width: 190,
              }}
            >
              <Button sx={{ width: "100%", backgroundColor: "white",color:`${!!themeColor ? themeColor : defaultColor}`, }}>
                <MoveToInboxOutlinedIcon sx={{ mr: 2,}} />
                   Inbox
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                width: 190,
                mt: 3,
              }}
            >
              <Button sx={{ width: "100%", backgroundColor: "white",color : `${!!themeColor ? themeColor : defaultColor}` }}>
                <StarPurple500OutlinedIcon sx={{ mr: 2 }} />
                stared
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                width: 190,
                mt: 3,
              }}
            >
              <Button sx={{ width: "100%", backgroundColor: "white" ,color : `${!!themeColor ? themeColor : defaultColor}` }}>
                <SendOutlinedIcon sx={{ mr: 2 }} />
                Sent
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                width: 190,
                mt: 3,
              }}
            >
              <Button sx={{ width: "100%", backgroundColor: "white" ,color : `${!!themeColor ? themeColor : defaultColor}` }}>
                <NewReleasesOutlinedIcon sx={{ mr: 2 }} />
                Spam
              </Button>
            </Box>

           
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                width: 190,
                mt: 3,
              }}
            >
              <Button sx={{ width: "100%", backgroundColor: "white"  ,color :"gray" }}>
                <FlagRoundedIcon sx={{ mr: 2 ,color :"yellow"}} />
                Updates
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                width: 190,
                mt: 3,
              }}
            >
              <Button sx={{ width: "100%", backgroundColor: "white" ,color :"gray" }}>
                <GroupRoundedIcon sx={{ mr: 2 ,color:"#f24636"}} />
                Social
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                width: 190,
                mt: 3,
              }}
            >
              <Button sx={{ width: "100%", backgroundColor: "white",color :"gray"  }}>
                <DirectionsIcon sx={{ mr: 2 }} />
                Promos
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                width: 190,
                mt: 3,
              }}
            >
              <Button sx={{ width: "100%", backgroundColor: "white" }}>
                <DirectionsIcon sx={{ mr: 2 }} />
                Inbox
              </Button>
            </Box>


          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailView;
