import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "@client/shared/components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Drawer from "@mui/material/Drawer";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./style";
import Typography from "@mui/material/Typography";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { THEME_VARIANT } from "@client/shared/constants";
import { DefaultLayout } from "../layouts";
const defaultState = {
  isDrawerOpen: false,
  isTakeoverDialogOpen: false,
  isOpen: false,
};
let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";
const LeftSideHeader = ({
  sidebarList = [],
  children = <></>,
  drawerList = [],
  handlThemeChange = () => {},
  handlePanelChange = () => {},
  handleLoginPage = () => {},
  handleMargin = () => {},
  themeColor = "#e35981",
  lightColor = "#f6dbe9"
}) => {
  const [state, setState] = useState(defaultState);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const isActiveItem = (itemRoute) => {
    let isActive = false;
    if (currentPath.split("/")[1] === itemRoute.split("/")[1]) {
      isActive = true;
    }
    return isActive;
  };
  localStorage.setItem("isDrawer", state.isDrawerOpen);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: false ? styles.drawerOpen : styles.drawerClose,
        }}
        variant="permanent"
        elevation={5}
      >
        <Box sx={{ ...styles.container }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#EAEAEA",
              minHeight: "64px",
              width: "100%",
              marginRight: "32px",
            }}
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                isDrawerOpen: prevState.isDrawerOpen ? false : true,
                isOpen: true,
              }));
              handleMargin(state.isDrawerOpen);
            }}
          >
            <MenuSharpIcon />
          </Box>
          <Box sx={{ ...styles.drawerList, alignItems: "center" }}>
            <IconButton>
              <AccountCircleIcon fontSize="large" />
            </IconButton>
            {sidebarList.map((item, index) => {
              return (
                <Box sx={{ textAlign: "center" }}>
                  <Tooltip
                    title={item.tooltipLabel}
                    placement="right"
                    key={index}
                  >
                    <Button
                      onClick={(e) => {
                        navigate(`${item.to}`);
                        e.preventDefault();
                        e.stopPropagation();
                        handlePanelChange(index);
                      }}
                      sx={{
                        ...(isActiveItem(item.to)
                          ? {
                              backgroundColor: `${
                                !!themeColor ? themeColor : defaultColor
                              }`,
                              minWidth: "40px",
                              minHeight: "40px",
                              margin: "10px",
                            }
                          : {
                              marginTop: "12px",
                              color: "white",
                            }),
                      }}
                    >
                      {item.icon}
                    </Button>
                  </Tooltip>
                  <Typography
                    sx={
                      isActiveItem(item.to)
                        ? {
                            color: `${
                              !!themeColor ? themeColor : defaultColor
                            }`,
                            width: "100%",
                          }
                        : { color: "grey", width: "100%" }
                    }
                    variant="body2"
                  >
                    {item.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Drawer>
      <Box sx={styles.content}>
        <Header
          elements={
            currentPath != "/subaccounts" && currentPath != "/users" ? (
              <IconButton sx={{ mt: 2 }}>
                <ArrowBackIcon />
              </IconButton>
            ) : (
              false
            )
          }
          handlThemeChange={handlThemeChange}
          handleLoginPage={handleLoginPage}
          themeColor={themeColor}
        />
        {children}
      </Box>
      <DefaultLayout
        isSideDrawerOpen={state.isDrawerOpen}
        drawerList={drawerList}
        isOpen={state.isOpen}
        themeColor={themeColor}
        lightColor={lightColor}
      />
    </>
  );
};

export default LeftSideHeader;
