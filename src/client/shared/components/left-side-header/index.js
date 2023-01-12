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
import { DefaultLayout } from "../layouts";
const defaultState = {
  isDrawerOpen: false,
  isTakeoverDialogOpen: false,
  isOpen: false,
};
const LeftSideHeader = ({
  sidebarList = [],
  children = <></>,
  drawerList = [],
  handlThemeChange = () => {},
  handlePanelChange = () => {},
  handleLoginPage = () => {},
  handleMargin = () => {},
}) => {
  const [state, setState] = useState(defaultState);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const isActiveItem = (itemRoute) => {
    let isActive = false;
    if (currentPath === itemRoute || currentPath === `${itemRoute}/`) {
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
        //   onClick={() =>
        //     setState((prevState) => ({
        //       ...prevState,
        //       isDrawerOpen: !sidebarList.length
        //         ? false
        //         : !prevState.isDrawerOpen,
        //     }))
        //   }
      >
        <Box sx={styles.container}>
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
                <Box>
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
                          ? styles.drawerButtonClose
                          : styles.drawerButton),
                      }}
                    >
                      {isActiveItem(item.to) ? item.activeIcon : item.icon}
                    </Button>
                  </Tooltip>
                  <Typography
                    sx={
                      isActiveItem(item.to)
                        ? { color: "red", width: "100%" }
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
        />
        {children}
      </Box>
      <DefaultLayout
        isSideDrawerOpen={state.isDrawerOpen}
        drawerList={drawerList}
        isOpen={state.isOpen}
      />
    </>
  );
};

export default LeftSideHeader;
