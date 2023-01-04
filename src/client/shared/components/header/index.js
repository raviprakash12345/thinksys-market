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

const defaultState = {
  open: false,
  version: {},
  role: {},
  licenseExpiresOn: "",
};

export default function Header({
  elements = [],
  position = "sticky",
  responsive = true,
  isDrawerOpen = false,
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
    <AppBar position={position} color="transparent" elevation={0}>
      <Toolbar
        sx={
          !!elements
            ? globalStyles.flex.justify.between
            : globalStyles.flex.justify.end
        }
      >
        {elements}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              const newThemeType =
                themeVariant === THEME_VARIANT.LIGHT
                  ? THEME_VARIANT.DARK
                  : THEME_VARIANT.LIGHT;
              setThemeVariant(newThemeType);
            }}
            sx={{ mr: 2 }}
          >
            {themeVariant === THEME_VARIANT.LIGHT ? (
              <DarkModeIcon fontSize="large" sx={{ color: "primary.dark" }} />
            ) : (
              <LightModeIcon fontSize="large" />
            )}
          </IconButton>
          <Avatar
            src={profileImageUri}
            sx={globalStyles.cursor.pointer}
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                open: !prevState.open,
              }));
            }}
          />
        </Box>
        <Drawer open={state.open} onClose={handleDrawerClose} anchor="right">
          <Box sx={style.drawerPaper}>
            <Box sx={style.nameWrapper}>
              <Avatar src={profileImageUri} />
              <Box sx={style.userData}>
                <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                  {/* {firstName + " " + lastName} */}
                  Oscar Wilde
                </Typography>
                <Typography sx={style.role}>
                  {/* {state.role?.roleName} */}
                  Admin
                </Typography>
              </Box>
            </Box>
            <MenuList>
              <About version={state.version} />
              <MenuItem onClick={handleLogout}>
                <ListItemText primary="Sign Out" />
                <ListItemIcon sx={style.icon}>
                  <ArrowForwardIcon fontSize="small" />
                </ListItemIcon>
              </MenuItem>
            </MenuList>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
