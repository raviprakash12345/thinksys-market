import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "@client/shared/components";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Home from "./home";
import { Box } from "@mui/system";
import { LeftSideHeader } from "../shared/components";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import WidgetsSharpIcon from "@mui/icons-material/WidgetsSharp";
import ImportantDevicesSharpIcon from "@mui/icons-material/ImportantDevicesSharp";
import TableChartSharpIcon from "@mui/icons-material/TableChartSharp";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import ExtensionSharpIcon from "@mui/icons-material/ExtensionSharp";
import SubjectSharpIcon from "@mui/icons-material/SubjectSharp";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { useState } from "react";
const App = ({ isSideBarOpen = false }) => {
  const [state, setState] = useState({
    themeColor: "",
  });
  let sidebarList = [
    {
      icon: <HomeSharpIcon sx={{ color: "#7B7E7E" }} />,
      activeIcon: <HomeSharpIcon sx={{ color: "#7B7E7E" }} />,
      to: "/home",
      label: "Home",
    },
    {
      icon: <WidgetsSharpIcon sx={{ color: "#7B7E7E" }} />,
      activeIcon: <WidgetsSharpIcon sx={{ color: "#7B7E7E" }} />,
      to: "/applications",
      label: "Applications",
    },
    {
      icon: <ImportantDevicesSharpIcon sx={{ color: "#7B7E7E" }} />,
      activeIcon: <ImportantDevicesSharpIcon sx={{ color: "#7B7E7E" }} />,
      to: "/pages",
      label: "Pages",
    },
    {
      icon: <TableChartSharpIcon sx={{ color: "#7B7E7E" }} />,
      activeIcon: <TableChartSharpIcon sx={{ color: "#7B7E7E" }} />,
      to: "/table-chart",
      label: "Table Chart",
    },
    {
      icon: <BorderColorSharpIcon sx={{ color: "#7B7E7E" }} />,
      activeIcon: <BorderColorSharpIcon sx={{ color: "#7B7E7E" }} />,
      to: "/form-button",
      label: "Form Button",
    },
    {
      icon: <ExtensionSharpIcon sx={{ color: "#7B7E7E" }} />,
      activeIcon: <ExtensionSharpIcon sx={{ color: "#7B7E7E" }} />,
      to: "/ui-collection",
      label: "UI Collection",
    },
    {
      icon: <SubjectSharpIcon sx={{ color: "#7B7E7E" }} />,
      activeIcon: <SubjectSharpIcon sx={{ color: "#7B7E7E" }} />,
      to: "/one-level",
      label: "One Level",
    },
  ];

  const drawerList = [
    {
      subHeading1: {
        subHeading: "Corporate",
        to: "/corporate",
        icon: <CorporateFareIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
      },
      subHeading2: {
        subHeading: "",
        to: "",
        icon: "",
      },
      subHeading3: {
        subHeading: "",
        to: "",
        icon: "",
      },
      heading: "LANDING PAGE",
    },
    {
      subHeading1: {
        subHeading: "Analytics",
        to: "/analytics",
        icon: (
          <SettingsBrightnessIcon sx={{ color: "#7B7E7E" }} fontSize="small" />
        ),
      },
      subHeading2: {
        subHeading: "Marketing",
        to: "/marketing",
        icon: (
          <SettingsSystemDaydreamIcon
            sx={{ color: "#7B7E7E" }}
            fontSize="small"
          />
        ),
      },
      subHeading3: {
        subHeading: "Cryptocurrency",
        to: "/cryptocurrency",
        icon: <LocalAtmIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
      },
      heading: "DASHBOARD",
    },
    {
      subHeading1: {
        subHeading: "Infographics",
        to: "/infographics",
        icon: <TimelapseIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
      },
      subHeading2: {
        subHeading: "Status",
        to: "/status",
        icon: <NaturePeopleIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
      },
      subHeading3: {
        subHeading: "Analytics",
        to: "/analytics",
        icon: <AssessmentIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
      },
      heading: "Widgets",
    },
  ];

  const handlThemeChange = (color = "#e35981") => {
    setState((prevState) => ({
      ...prevState,
      themeColor: color || "#e35981",
    }));
  };

  return (
    <>
      <LeftSideHeader
        handlThemeChange={handlThemeChange}
        sidebarList={sidebarList}
        drawerList={drawerList}
      >
        <Routes>
          <Route
            path="/analytics"
            element={<Home themeColor={state.themeColor} />}
          />
        </Routes>
      </LeftSideHeader>
      {isSideBarOpen && (
        <DefaultLayout>
          {/* <Routes>
            <Route path="/analytics" element={<Home />} />
          </Routes> */}
        </DefaultLayout>
      )}
    </>
  );
};

export default App;
