import React, { useState, useCallback, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LightModeIcon from "@mui/icons-material/LightMode";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { About } from "@client/shared/components";
import { decodeToken, getToken, removeToken } from "@client/utils";
import { AppService } from "@client/shared/services";
import { AppContext } from "@client/shared/contexts";
import {
  globalStyles,
  THEME_VARIANT,
  sessionExpireMsg,
} from "@client/shared/constants";

import style from "./style";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import PaletteIcon from "@mui/icons-material/Palette";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import FormatTextdirectionLToRIcon from "@mui/icons-material/FormatTextdirectionLToR";
import { NavLink } from "react-router-dom";

const defaultState = {
  open: false,
  version: {},
  role: {},
  licenseExpiresOn: "",
  fullScreen: false,
  type: "",
  checked: false,
  checked1: false,
};

export default function Header({
  elements = [],
  position = "sticky",
  responsive = true,
  isDrawerOpen = false,
  handlThemeChange = () => {},
  handleLoginPage = ()=>{}
}) {
  const navigate = useNavigate();
  const { themeVariant, setThemeVariant } = useContext(AppContext);
  const token = getToken();
  const userData = decodeToken(token);
  const [state, setState] = useState({
    ...defaultState,
    open: isDrawerOpen,
  });
  const { firstName = "", lastName = "", profileImageUri = "" } = userData;
  const handleDrawerClose = () => {
    setState((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      checked: event.target.checked,
    }));
  };
  const handleChange1 = (event) => {
    setState((prevState) => ({
      ...prevState,
      checked1: event.target.checked,
    }));
  };
  const Lanuages = [
    { label: "English" },
    { label: "Hindi" },
    { label: "Telugu" },
    { label: "Kannada" },
  ];

  const handleNavigation = () => {
    navigate("/login");
    handleLoginPage()
  };
  const handleLogout = async () => {
    // const { error } = await AppService.logoutUser(getToken());
    // if (!error) {
    //   sessionStorage.removeItem("selectedUserId");
    //   removeToken();
    //   navigate("/");
    // } else {
    //   toast.error(sessionExpireMsg);
    // }
  };
  // const getUserDetails = useCallback(async () => {
  //   const { data, error } = await AppService.getUserDetails();
  //   if (error) {
  //     return;
  //   } else {
  //     setState((prevState) => ({
  //       ...prevState,
  //       role: data.user.roleAccess,
  //       licenseExpiresOn: data.user?.licenseExpiresOn,
  //     }));
  //   }
  // }, []);
  // useEffect(() => {
  //   if (token) {
  //     getUserDetails();
  //   }
  // }, [getUserDetails]);

  return (
    <AppBar position={position} color="default" elevation={5}>
      <Toolbar
        sx={
          !!elements
            ? globalStyles.flex.justify.between
            : globalStyles.flex.justify.end
        }
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: 5, width: "150px" }}>Thinksys Prime</Typography>
          <IconButton
            onClick={() =>
              setState((prevState) => ({
                ...prevState,
                fullScreen: !state.fullScreen,
              }))
            }
          >
            {!state.fullScreen ? (
              <FullscreenIcon fontSize="medium"></FullscreenIcon>
            ) : (
              <FullscreenExitIcon fontSize="medium"></FullscreenExitIcon>
            )}
          </IconButton>

          <IconButton
            onClick={() => {
              const newThemeType =
                themeVariant === THEME_VARIANT.LIGHT
                  ? THEME_VARIANT.DARK
                  : THEME_VARIANT.LIGHT;
              setThemeVariant(newThemeType);
            }}
          >
            {themeVariant === THEME_VARIANT.LIGHT ? (
              <InvertColorsIcon
                fontSize="medium"
                sx={{ color: "primary.dark" }}
              />
            ) : (
              <InvertColorsIcon fontSize="medium" />
            )}
          </IconButton>
          <HelpOutlineIcon
            fontSize="medium"
            sx={{ color: "grey", mr: 120 }}
          ></HelpOutlineIcon>
          {/* <Box
          
           sx={{
            width: 150,
           maxWidth: '100%',
           backgroundColor:"white",
           display: "flex",
           borderRadius: "10px",
           border:"1px solid white",
           }}
              > 
                 <SearchIcon  
                 sx={{ marginTop :  "12px",}} />
               <TextField 
               size="small"
               placeholder="search..."
               sx={{width : "150px" ,
               border:"1px solid white",
                   "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    
                    "&:hover": {
                      border:"1px solid white",
                      width:"280px"
                    },
                  },
                }} 
              />
                
        </Box> */}
          <TextField
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="search..."
            sx={{
              width: "150px",
              mr: "20px",
              border: "1px solid white",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",

                //  "&:hover": {
                //    borderColor:"1px solid red",
                //    width:"280px",

                //  },
              },
            }}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Lanuages}
            size="small"
            sx={{ width: 150, mr: "20px" }}
            defaultValue="English"
            disableClearable="true"
            renderInput={(params) => <TextField {...params} />}
          />

          <Button
            variant="contained"
            sx={{ backgroundColor: "#3f51b5", width: "110px" }}
            onClick={handleNavigation}
          >
            Login
          </Button>

          {/* <Avatar
            src={profileImageUri}
            sx={{...globalStyles.cursor.pointer,top : 300}}
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                open: !prevState.open,
              }));
            }}
          /> */}

          <PaletteIcon
            fontSize="large"
            sx={{
              bottom: 50,
              color: "#3f51b5",
              position: "relative",
              top: "400px",
            }}
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                open: !prevState.open,
              }));
            }}
          ></PaletteIcon>
        </Box>
        <Drawer open={state.open} onClose={handleDrawerClose} anchor="right">
          <Box sx={style.drawerPaper}>
            <Box sx={{ backgroundColor: "#fafafa" }}>
              <Typography
                sx={{ paddingTop: 3, paddingLeft: 9, paddingBottom: 3 }}
              >
                TEMPLATE SETTINGS
              </Typography>
            </Box>
            <Box sx={{ backgroundColor: "#ffffff" }}>
              <Box sx={{ ...style.themeColor, ml: "30px" }}>
                <PaletteIcon sx={{ color: "#757575", mr: "6px" }}></PaletteIcon>
                <Typography sx={{ color: "#757575" }}>Theme Colour</Typography>
              </Box>
              <Box sx={style.themeColor}>
                <Box
                  onClick={() => handlThemeChange("#f14f6f")}
                  sx={{ ...style.themeBox, backgroundColor: "#f14f6f" }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => handlThemeChange("#40a291")}
                  sx={{ ...style.themeBox, backgroundColor: "#40a291" }}
                ></Box>
                <Box
                  onClick={() => handlThemeChange("#3d53c8")}
                  sx={{ ...style.themeBox, backgroundColor: "#3d53c8" }}
                ></Box>
                <Box
                  onClick={() => handlThemeChange("#a45ac5")}
                  sx={{ ...style.themeBox, backgroundColor: "#a45ac5" }}
                ></Box>
                <Box
                  onClick={() => handlThemeChange("#f24724")}
                  sx={{ ...style.themeBox, backgroundColor: "#f24724" }}
                ></Box>
                <Box
                  onClick={() => handlThemeChange("#607c89")}
                  sx={{ ...style.themeBox, backgroundColor: "#607c89" }}
                ></Box>
                <Box
                  onClick={() => handlThemeChange("#70cb34")}
                  sx={{ ...style.themeBox, backgroundColor: "#70cb34" }}
                ></Box>
                <Box
                  onClick={() => handlThemeChange("#00a2f1")}
                  sx={{ ...style.themeBox, backgroundColor: "#00a2f1" }}
                ></Box>
                <Box
                  onClick={() => handlThemeChange("#795048")}
                  sx={{ ...style.themeBox, backgroundColor: "#795048" }}
                ></Box>
              </Box>
            </Box>

            <Box sx={{ backgroundColor: "#ffffff" }}>
              <Box sx={{ ...style.themeColor, ml: "30px" }}>
                <FactCheckIcon
                  sx={{ color: "#757575", mr: "6px" }}
                ></FactCheckIcon>
                <Typography sx={{ color: "#757575" }}>
                  NAVIGATION LAYOUT
                </Typography>
              </Box>
              <Box sx={style.themeColor}>
                <Box sx={{ ...style.themeBox, backgroundColor: "#f14f6f" }}>
                  {" "}
                </Box>
                <Box
                  sx={{ ...style.themeBox, backgroundColor: "#40a291" }}
                ></Box>
                <Box
                  sx={{ ...style.themeBox, backgroundColor: "#3d53c8" }}
                ></Box>
                <Box
                  sx={{ ...style.themeBox, backgroundColor: "#a45ac5" }}
                ></Box>
                <Box
                  sx={{ ...style.themeBox, backgroundColor: "#f24724" }}
                ></Box>
                <Box
                  sx={{ ...style.themeBox, backgroundColor: "#607c89" }}
                ></Box>
              </Box>
            </Box>

            <Box sx={{ backgroundColor: "#ffffff" }}>
              <Box sx={{ ...style.themeColor, ml: "30px" }}>
                <InvertColorsIcon
                  fontSize="small"
                  sx={{ color: "#757575", mr: "6px" }}
                />
                <Typography sx={{ color: "#757575" }}>Theme Mode</Typography>
              </Box>
              <Box sx={{ ...style.themeColor, ml: "30px" }}>
                <Typography sx={{ mr: "10px" }}>Light Mode</Typography>
                <Switch
                  size="large"
                  checked={state.checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Typography sx={{ ml: "10px" }}>Dark Mode</Typography>
              </Box>
            </Box>

            <Box sx={{ backgroundColor: "#ffffff" }}>
              <Box sx={{ ...style.themeColor, ml: "30px" }}>
                <FormatTextdirectionLToRIcon
                  fontSize="small"
                  sx={{ color: "#757575", mr: "6px" }}
                />
                <Typography sx={{ color: "#757575" }}>
                  LAYOUT DIRECTION
                </Typography>
              </Box>
              <Box sx={{ ...style.themeColor, ml: "30px" }}>
                <Typography sx={{ mr: "10px" }}>LTR</Typography>
                <Switch
                  size="large"
                  checked={state.checked1}
                  onChange={handleChange1}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Typography sx={{ ml: "10px" }}>RTL</Typography>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
