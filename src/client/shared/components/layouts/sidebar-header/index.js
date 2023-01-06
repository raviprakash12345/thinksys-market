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
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import styles from "./styles";
import LeftSideHeader from "../../left-side-header";
import Typography from "@mui/material/Typography";
const defaultState = {
  isDrawerOpen: false,
  isTakeoverDialogOpen: false,
};

export default function SidebarHeader({
  drawerList = [],
  children = <></>,
  isSideDrawerOpen = false,
  isOpen = false,
}) {
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
  // console.log(`isDrawerOpen`, isDrawerOpen);
  // const logo = state.isDrawerOpen ? "users-white.svg" : "users-white.svg";
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
            sx:
              isSideDrawerOpen || state.isDrawerOpen
                ? styles.drawerOpen
                : styles.drawerClose,
          }}
          variant="permanent"
          elevation={5}
        >
          <Box sx={styles.container}>
            <Box></Box>
            <Box>
              {drawerList.map((item, index) => {
                console.log(`item`, item);
                return (
                  <Box sx={{ p: "8px" }}>
                    <Typography
                      sx={{ marginRight: "110px", color: "#E32D46" }}
                      variant="body1"
                    >
                      {item.heading}
                    </Typography>
                    <Box>
                      <IconButton>{item.subHeading1.icon}</IconButton>
                      <Button
                        sx={
                          isActiveItem(item.subHeading1.to)
                            ? {
                                color: "grey",
                                backgroundColor: "pink",
                              }
                            : { color: "grey" }
                        }
                        variant="text"
                        onClick={(e) => {
                          navigate(`${item.subHeading1.to}`);
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        {item.subHeading1.subHeading}
                      </Button>
                    </Box>
                    <Box>
                      <IconButton>{item.subHeading2.icon}</IconButton>
                      <Button
                        sx={{ color: "grey" }}
                        variant="text"
                        onClick={(e) => {
                          navigate(`${item.subHeading2.to}`);
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        {item.subHeading2.subHeading}
                      </Button>
                    </Box>
                    <Box>
                      <IconButton>{item.subHeading3.icon}</IconButton>
                      <Button
                        sx={{ color: "grey" }}
                        variant="text"
                        onClick={(e) => {
                          navigate(`${item.subHeading3.to}`);
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        {item.subHeading3.subHeading}
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Drawer>
      </ClickAwayListener>
      <Box sx={styles.content}>{children}</Box>
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
