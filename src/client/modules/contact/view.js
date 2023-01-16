import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import { useLocation } from "react-router-dom";
const contactData = [
  {
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "James Doe",
    designation: "Admin",
  },
  {
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "Jim Doe",
    designation: "System Engineer",
  },
  {
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "jen Doe",
    designation: "Executive",
  },
  {
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "Jin Doe",
    designation: "Security",
  },
  {
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "Jin Doe",
    designation: "Security",
  },
  {
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "Jin Doe",
    designation: "Security",
  },
];
const ContactView = ({ userData = [] }) => {
  const location = useLocation();
  return (
    <>
      <Box sx={{ marginLeft: "250px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#b22362" }} variant="h4">
            Email
          </Typography>
          <Typography sx={{ marginLeft: "16px" }} variant="body1">
            {location.pathname}
          </Typography>
        </Box>
        <Paper sx={{ backgroundColor: "#e8eaf6" }}>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Box
                sx={{ overflowY: "scroll", width: "300px", height: "500px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "16px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      placeholder="Search"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          width: "200px",
                          height: "32px",
                          background: "white",
                        },
                      }}
                    />
                    <IconButton>
                      <AddIcon sx={{ fontSize: "40px" }} />
                    </IconButton>
                  </Box>
                </Box>
                <Typography
                  sx={{ marginLeft: "100px", color: "grey" }}
                  variant="body1"
                >
                  {contactData.length} Contact
                </Typography>

                {contactData.map((item) => {
                  return (
                    <>
                      <Box
                        sx={{
                          width: "275px",
                          maxWidth: "250px",
                          height: "68px",
                          border: "1px solid white",
                          backgroundColor: "white",
                          borderRadius: "8px",
                          marginLeft: "24px",
                          marginTop: "12px",
                          cursor: "pointer",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "8px",
                          }}
                        >
                          {item.profileImg}
                          <Box sx={{ width: "100%", marginLeft: "8px" }}>
                            <Typography variant="body1">
                              {item.profileName}
                            </Typography>
                            <Typography variant="body2">
                              {item.designation}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px",
                }}
              >
                <AccountCircleIcon fontSize="large" />
                <Box sx={{ width: "100%", marginLeft: "8px" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="h6">
                    "Name"
                  </Typography>
                  <Typography variant="body2">"designation"</Typography>
                </Box>
              </Box>
              {userData.userDetails1.map((item) => {
                return (
                  <>
                    <Paper
                      sx={{
                        backgroundColor: "white",
                        width: 1200,
                        padding: "16px",
                      }}
                      elevation={0}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#e3f2fd" }}>
                          <PhoneIcon sx={{ color: "#2d96f3" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">{item.phone}</Typography>
                          <Typography variant="body2">Phone</Typography>
                        </Box>
                      </Box>
                      <hr />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#fff8e1" }}>
                          <SmartphoneIcon sx={{ color: "#f7c00f" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">
                            {item.secondaryPhone}
                          </Typography>
                          <Typography variant="body2">
                            Secondary Phone
                          </Typography>
                        </Box>
                      </Box>
                      <hr />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#e0f2f1" }}>
                          <MailIcon sx={{ color: "#519888" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">{item.personalEmail}</Typography>
                          <Typography variant="body2">Personal Email</Typography>
                        </Box>
                      </Box>
                      <hr />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#efebe9" }}>
                          <WorkIcon sx={{ color: "#795548" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">{item.companyEmail}</Typography>
                          <Typography variant="body2">Company Email</Typography>
                        </Box>
                      </Box>
                      <hr />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#faebee" }}>
                          <LocationOnIcon sx={{ color: "#e44f37" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">{item.address}</Typography>
                          <Typography variant="body2">Address</Typography>
                        </Box>
                      </Box>
                      <hr />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#ede7f6" }}>
                          <LanguageIcon sx={{ color: "#6a4bb7" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">{item.website}</Typography>
                          <Typography variant="body2">Website</Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </>
                );
              })}
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default ContactView;
