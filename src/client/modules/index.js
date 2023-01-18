import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "@client/shared/components";
import Home from "./home";
import Marketing from "./marketing";
import Login from "./login";
import Register from "./register";
import { Box } from "@mui/system";
import { LeftSideHeader } from "@client/shared/components";
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import MailIcon from "@mui/icons-material/Mail";
import { useEffect, useState } from "react";
import Cryptocurrency from "./cryptocurrency";
import Todo from "./todo";
import Infographics from "./infographics";
import Status from "./status";
import Analytics from "./analytics";
import Email from "./email";
import Contact from "./contact";
import TodoFirebase from "./todo-firebase";
import DataTable from "./dataTable";
import ContactFireBase from "./contact-firebase";

let index = 1;
const drawerList1 = [
  {
    subHeading1: {
      subHeading: "Corporate",
      to: "/home/corporate",
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
      to: "/home/analytics",
      icon: (
        <SettingsBrightnessIcon sx={{ color: "#7B7E7E" }} fontSize="small" />
      ),
    },
    subHeading2: {
      subHeading: "Marketing",
      to: "/home/marketing",
      icon: (
        <SettingsSystemDaydreamIcon
          sx={{ color: "#7B7E7E" }}
          fontSize="small"
        />
      ),
    },
    subHeading3: {
      subHeading: "Cryptocurrency",
      to: "/home/cryptocurrency",
      icon: <LocalAtmIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    heading: "DASHBOARD",
  },
  {
    subHeading1: {
      subHeading: "Infographics",
      to: "/home/infographics",
      icon: <TimelapseIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    subHeading2: {
      subHeading: "Status",
      to: "/home/status",
      icon: <NaturePeopleIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    subHeading3: {
      subHeading: "Analytics",
      to: "/home/analytic",
      icon: <AssessmentIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    heading: "Widgets",
  },
];
const drawerList2 = [
  {
    subHeading1: {
      subHeading: "Todo",
      to: "/applications/todo",
      icon: <CheckCircleIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    subHeading2: {
      subHeading: "Contact",
      to: "/applications/contact",
      icon: (
        <PermContactCalendarIcon sx={{ color: "#7B7E7E" }} fontSize="small" />
      ),
    },
    subHeading3: {
      subHeading: "Email",
      to: "/applications/email",
      icon: <MailIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    heading: "STATIC APPS",
  },
  {
    subHeading1: {
      subHeading: "Todo Firebase",
      to: "/applications/todoFireBase",
      icon: (
        <SettingsBrightnessIcon sx={{ color: "#7B7E7E" }} fontSize="small" />
      ),
    },
    subHeading2: {
      subHeading: "Contact Firebase",
      to: "/applications/contactFireBase",
      icon: (
        <SettingsSystemDaydreamIcon
          sx={{ color: "#7B7E7E" }}
          fontSize="small"
        />
      ),
    },
    subHeading3: {
      subHeading: "Email Firebase",
      to: "/applications/emailFireBase",
      icon: <LocalAtmIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    heading: "FIREBASE APPS",
  },
  {
    subHeading1: {
      subHeading: "Map Marker",
      to: "/applications/mapMarker",
      icon: <TimelapseIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    subHeading2: {
      subHeading: "Map Direction",
      to: "/applications/mapDirection",
      icon: <NaturePeopleIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    subHeading3: {
      subHeading: "Map with Search...",
      to: "/applications/mapWithSearch",
      icon: <AssessmentIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    heading: "MAPS",
  },
];
const drawerList3 = [
  {
    subHeading1: {
      subHeading: "Login",
      to: "/pages/login",
      icon: <CorporateFareIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    subHeading2: {
      subHeading: "Register",
      to: "/pages/register",
      icon: "",
    },
    subHeading3: {
      subHeading: "Reset Password",
      to: "/pages/resetPassword",
      icon: "",
    },
    heading: "STATIC AUTH",
  },
  {
    subHeading1: {
      subHeading: "Login Firebase",
      to: "/pages/loginFirebase",
      icon: (
        <SettingsBrightnessIcon sx={{ color: "#7B7E7E" }} fontSize="small" />
      ),
    },
    subHeading2: {
      subHeading: "Register Firebase",
      to: "/pages/registerFirebase",
      icon: (
        <SettingsSystemDaydreamIcon
          sx={{ color: "#7B7E7E" }}
          fontSize="small"
        />
      ),
    },
    subHeading3: {
      subHeading: "Reset password...",
      to: "/pages/resetPasswordFirebase",
      icon: <LocalAtmIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    heading: "FIREBASE AUTH",
  },
  {
    subHeading1: {
      subHeading: "Timeline",
      to: "/pages/timeLine",
      icon: <TimelapseIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    subHeading2: {
      subHeading: "Chat",
      to: "/pages/chat",
      icon: <NaturePeopleIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    subHeading3: {
      subHeading: "User Profile",
      to: "/pages/userProfile",
      icon: <AssessmentIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    heading: "SOCIAL PAGES",
  },
];
const drawerList4 = [
  {
    subHeading1: {
      subHeading: "Basic",
      to: "/tables/basic",
      icon: <CorporateFareIcon sx={{ color: "#7B7E7E" }} fontSize="small" />,
    },
    subHeading2: {
      subHeading: "Data Table",
      to: "/tables/dataTable",
      icon: "",
    },
    subHeading3: {
      subHeading: "Table Playground",
      to: "/tables/tablePlayground",
      icon: "",
    },
    heading: "COMMON TABLES",
  },
  {
    subHeading1: {
      subHeading: "Tree Table",
      to: "/tables/treeTable",
      icon: (
        <SettingsBrightnessIcon sx={{ color: "#7B7E7E" }} fontSize="small" />
      ),
    },
    subHeading2: {
      subHeading: "Table Edit",
      to: "/tables/tableEdit",
      icon: (
        <SettingsSystemDaydreamIcon
          sx={{ color: "#7B7E7E" }}
          fontSize="small"
        />
      ),
    },
    subHeading3: {},
    heading: "REDUX TABLE",
  },
];
const App = ({ isSideDrawerOpen = false }) => {
  const [state, setState] = useState({
    themeColor: "",
    listIndex: 0,
    drawerList: [],
    isLoginPageOpen: false,
    isDrawerMargin: true,
    lightColor: "",
  });
  let sidebarList = [
    {
      icon: <HomeSharpIcon sx={{ color: "#7B7E7E" }} />,
      activeIcon: <HomeSharpIcon sx={{ color: "#7B7E7E" }} />,
      to: "/home/analytics",
      label: "Home",
    },
    {
      icon: <WidgetsSharpIcon sx={{ color: "#7B7E7E" }} />,
      activeIcon: <WidgetsSharpIcon sx={{ color: "#7B7E7E" }} />,
      to: "/applications/todo",
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

  const handlePanelChange = (index = 0) => {
    setState((prevState) => ({
      ...prevState,
      listIndex: index,
    }));
  };
  const fetchList = (listIndex = 0) => {
    setState((prevState) => ({
      ...prevState,
      drawerList:
        listIndex == 0
          ? drawerList1
          : listIndex == 1
          ? drawerList2
          : listIndex == 2
          ? drawerList3
          : listIndex == 3
          ? drawerList4
          : [],
    }));
  };

  const handlThemeChange = (color = "#e35981", lightColor = "") => {
    setState((prevState) => ({
      ...prevState,
      themeColor: color || "#e35981",
      lightColor: lightColor || "#f6dbe9",
    }));
  };

  const handleLoginPage = () => {
    setState((prevState) => ({
      ...prevState,
      isLoginPageOpen: true,
    }));
  };

  const handleMargin = (isDrawerOpen = false) => {
    setState((prevState) => ({
      ...prevState,
      isDrawerMargin: isDrawerOpen,
    }));
  };

  useEffect(() => {
    fetchList(state.listIndex);
  }, [state.listIndex]);

  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      window.location.reload();
      setState((prevState) => ({
        ...prevState,
        isLoginPageOpen: true,
      }));
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!state.isLoginPageOpen && (
        <LeftSideHeader
          handlThemeChange={handlThemeChange}
          sidebarList={sidebarList}
          drawerList={state.drawerList}
          handlePanelChange={handlePanelChange}
          handleLoginPage={handleLoginPage}
          handleMargin={handleMargin}
          themeColor={state.themeColor}
          lightColor={state.lightColor}
        >
          <Routes>
            <Route
              path="/home/analytics"
              element={
                <Home
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                />
              }
            />
            <Route
              path="/"
              element={
                <Home
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/home/cryptocurrency"
              element={
                <Cryptocurrency
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                  lightColor={state.lightColor}
                />
              }
            />
            <Route
              path="/home/marketing"
              element={
                <Marketing
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                />
              }
            />
            <Route
              path="/applications/todo"
              element={
                <Todo
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                  lightColor={state.lightColor}
                />
              }
            />
            <Route
              path="/home/infographics"
              element={
                <Infographics
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                />
              }
            />
            <Route
              path="/home/status"
              element={
                <Status
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                />
              }
            />
            <Route
              path="/home/analytic"
              element={
                <Analytics
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                />
              }
            />
            <Route
              path="/applications/email"
              element={
                <Email
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                  lightColor={state.lightColor}
                />
              }
            />
            <Route
              path="/applications/contact"
              element={
                <Contact
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                  lightColor={state.lightColor}
                />
              }
            />
            <Route
              path="/applications/todoFireBase"
              element={
                <TodoFirebase
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                  lightColor={state.lightColor}
                />
              }
            />
            <Route
              path="/applications/contactFireBase"
              element={
                <ContactFireBase
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                  lightColor={state.lightColor}
                />
              }
            />
            <Route
              path="/tables/dataTable"
              element={
                <DataTable
                  themeColor={state.themeColor}
                  isDrawerMargin={state.isDrawerMargin}
                  lightColor={state.lightColor}
                />
              }
            />
          </Routes>
        </LeftSideHeader>
      )}
    </>
  );
};

export default App;
