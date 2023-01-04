import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuListItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { globalStyles } from "@client/shared/constants";
import { Box } from "@mui/material";
import aboutStyles from "./styles";

const AboutModal = ({ classes: passedClasses = {}, version = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuListItem onClick={() => setIsOpen(true)}>
        <ListItemText primary="About" />
        <ListItemIcon sx={aboutStyles.icon}>
          <InfoOutlinedIcon fontSize="small" />
        </ListItemIcon>
      </MenuListItem>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle hasClose sx={aboutStyles.aboutHeading}>
          <Box sx={{ display: "flex" }}>
            <img src={`/assets/logo.png`} alt="" width={28} height={28} />
            <Typography variant="h6" sx={{ ml: 2, color: "secondary.dark" }}>
              Template
            </Typography>
          </Box>
          <IconButton aria-label="close" onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={aboutStyles.dialogContent}>
          <Box>
            <Divider />
            <Box sx={aboutStyles.group}>
              <Typography variant="subtitle2">Version:</Typography>
              <Typography variant="subtitle2" sx={aboutStyles.values}>
                {version.release || "1.0"}
              </Typography>
            </Box>
            <Divider />
            <Box sx={aboutStyles.group}>
              <Typography variant="subtitle2">Date:</Typography>
              <Typography variant="subtitle2" sx={aboutStyles.values}>
                {version.date || "22-12-2022"}
              </Typography>
            </Box>
            <Divider />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AboutModal;
