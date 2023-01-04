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

import styles from "./styles";
const defaultState = {
  isDrawerOpen: false,
  isTakeoverDialogOpen: false,
};

export default function SidebarHeader({ drawerList = [], children = <></> }) {
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

  const logo = state.isDrawerOpen ? "users-white.svg" : "users-white.svg";
  return (
    <>
      <ClickAwayListener
        onClickAway={() =>
          setState((prevState) => ({
            ...prevState,
            isDrawerOpen: false,
          }))
        }
      >
        <Drawer
          PaperProps={{
            sx: state.isDrawerOpen ? styles.drawerOpen : styles.drawerClose,
          }}
          variant="permanent"
          elevation={0}
          onClick={() =>
            setState((prevState) => ({
              ...prevState,
              isDrawerOpen: !drawerList.length
                ? false
                : !prevState.isDrawerOpen,
            }))
          }
        >
          <Box sx={styles.container}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: state.isDrawerOpen
                  ? "common.white"
                  : "primary.dark",
                minHeight: state.isDrawerOpen ? "80px" : "64px",
                width: "100%",
              }}
            >
              <img
                src={`/assets/${logo}`}
                alt="Brand Logo"
                style={state.isDrawerOpen ? styles.logoOpen : styles.logo}
              />
            </Box>
            <Box sx={styles.drawerList}>
              {drawerList.map((item, index) => {
                return state.isDrawerOpen ? (
                  <Box sx={styles.btnContainer} key={index}>
                    <Button
                      startIcon={
                        <IconButton sx={{ mr: 1 }}>
                          {isActiveItem(item.to) ? item.activeIcon : item.icon}
                        </IconButton>
                      }
                      sx={{
                        ...(isActiveItem(item.to)
                          ? styles.drawerButtonActive
                          : styles.drawerButtonInActive),
                      }}
                      onClick={() => navigate(`${item.to}`)}
                    >
                      {item.label}
                    </Button>
                  </Box>
                ) : (
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
                );
              })}
            </Box>
          </Box>
        </Drawer>
      </ClickAwayListener>
      <Box sx={styles.content}>
        <Header
          elements={
            currentPath != "/subaccounts" && currentPath != "/users" ? (
              <IconButton sx={{ mt: 2 }} onClick={() => navigate(-1)}>
                <ArrowBackIcon />
              </IconButton>
            ) : (
              false
            )
          }
        />
        {children}
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.isDrawerOpen}
        onClick={() =>
          setState((prevState) => ({
            ...prevState,
            isDrawerOpen: false,
          }))
        }
      />
    </>
  );
}
