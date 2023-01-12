import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import IconButton from "@mui/material/IconButton";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import MovingIcon from "@mui/icons-material/Moving";
import MuseumIcon from "@mui/icons-material/Museum";
import MarketPlaceGrid from "../shared/marketplace-grid";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FilterListIcon from "@mui/icons-material/FilterList";
import TextField from "@mui/material/TextField";
const noop = () => {};
let defaultColor = "#e35981";
const data = [
  {
    name: "Page A",
    uv: 2000,
    pv: 400,
    amt: 400,
  },
  {
    name: "Page B",
    uv: 1000,
    pv: 298,
    amt: 210,
  },
  {
    name: "Page C",
    uv: 500,
    pv: 6800,
    amt: 290,
  },
  {
    name: "Page D",
    uv: 780,
    pv: 1908,
    amt: 500,
  },
  {
    name: "Page E",
    uv: 790,
    pv: 2800,
    amt: 181,
  },
];

const CryptocurrencyView = ({
  themeColor = "#e35981",
  handleSearch = noop,
  isSearchBox = false,
  isDrawerMargin = true,
}) => {
  return (
    <>
      <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#b22362" }} variant="h4">
            Crypto
          </Typography>
          <Typography sx={{ marginLeft: "16px" }} variant="body1">
            App / Dashboard / Crypto
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box>
            <Box>
              <Paper sx={{ height: "200px", width: "500px" }} elevation={2}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    p: "6px",
                  }}
                >
                  <Box>
                    <IconButton
                      sx={{
                        border: "1px solid #fba630",
                        background: "#fba630",
                      }}
                    >
                      <CurrencyBitcoinIcon
                        sx={{ color: "white", fontSize: "40px" }}
                      />
                    </IconButton>
                  </Box>
                  <Box sx={{ marginTop: "12px" }}>
                    <Typography variant="h6">Bitcoin</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton>
                        <MovingIcon sx={{ color: "#56b35a" }} />
                      </IconButton>
                      <Typography
                        sx={{ fontWeight: "bold", color: "#56b35a" }}
                        variant="body1"
                      >
                        5.6%
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={{ marginLeft: "200px" }} variant="h3">
                      $ 216
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "500px",
                    height: "100px",
                    backgroundColor: "#ffb300",
                    position: "relative",
                    top: 10,
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                  }}
                >
                  <ResponsiveContainer width="50%" height="100%">
                    <LineChart width={100} height={100} data={data}>
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Paper>
            </Box>

            <Box>
              <Paper
                sx={{ marginTop: "12px", height: "200px", width: "500px" }}
                elevation={2}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    p: "6px",
                  }}
                >
                  <Box>
                    <IconButton
                      sx={{
                        border: "1px solid #fba630",
                        background: "#fba630",
                      }}
                    >
                      <MuseumIcon sx={{ color: "white", fontSize: "40px" }} />
                    </IconButton>
                  </Box>
                  <Box sx={{ marginTop: "12px" }}>
                    <Typography variant="h6">Monero</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton>
                        <MovingIcon sx={{ color: "#56b35a" }} />
                      </IconButton>
                      <Typography
                        sx={{ fontWeight: "bold", color: "#56b35a" }}
                        variant="body1"
                      >
                        1.16%
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={{ marginLeft: "200px" }} variant="h3">
                      $ 22
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "500px",
                    height: "100px",
                    backgroundColor: "#fb8c00",
                    position: "relative",
                    top: 10,
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                  }}
                >
                  <ResponsiveContainer width="50%" height="100%">
                    <LineChart width={100} height={100} data={data}>
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Paper>
            </Box>
          </Box>
          <Box>
            <Box>
              <Paper sx={{ height: "200px", width: "500px" }} elevation={2}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    p: "6px",
                  }}
                >
                  <Box>
                    <IconButton
                      sx={{
                        border: "1px solid #fba630",
                        background: "#fba630",
                      }}
                    >
                      <CurrencyBitcoinIcon
                        sx={{ color: "white", fontSize: "40px" }}
                      />
                    </IconButton>
                  </Box>
                  <Box sx={{ marginTop: "12px" }}>
                    <Typography variant="h6">Bitcoin</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton>
                        <MovingIcon sx={{ color: "#56b35a" }} />
                      </IconButton>
                      <Typography
                        sx={{ fontWeight: "bold", color: "#56b35a" }}
                        variant="body1"
                      >
                        5.6%
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={{ marginLeft: "200px" }} variant="h3">
                      $ 216
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "500px",
                    height: "100px",
                    backgroundColor: "#ffb300",
                    position: "relative",
                    top: 10,
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                  }}
                >
                  <ResponsiveContainer width="50%" height="100%">
                    <LineChart width={100} height={100} data={data}>
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Paper>
            </Box>

            <Box>
              <Paper
                sx={{ marginTop: "12px", height: "200px", width: "500px" }}
                elevation={2}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    p: "6px",
                  }}
                >
                  <Box>
                    <IconButton
                      sx={{
                        border: "1px solid #fba630",
                        background: "#fba630",
                      }}
                    >
                      <CurrencyBitcoinIcon
                        sx={{ color: "white", fontSize: "40px" }}
                      />
                    </IconButton>
                  </Box>
                  <Box sx={{ marginTop: "12px" }}>
                    <Typography variant="h6">Bitcoin</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton>
                        <MovingIcon sx={{ color: "#56b35a" }} />
                      </IconButton>
                      <Typography
                        sx={{ fontWeight: "bold", color: "#56b35a" }}
                        variant="body1"
                      >
                        5.6%
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={{ marginLeft: "200px" }} variant="h3">
                      $ 216
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "500px",
                    height: "100px",
                    backgroundColor: "#fb8c00",
                    position: "relative",
                    top: 10,
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                  }}
                >
                  <ResponsiveContainer width="50%" height="100%">
                    <LineChart width={100} height={100} data={data}>
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Paper>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                border: `1px solid #e35981`,
                height: "135px",
                width: "380px",
                borderRadius: "10px",
                marginTop: "8px",
                color: "#e35981",
                padding: "4px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography sx={{ marginTop: "40px" }} variant="h3">
                    $ 1307
                  </Typography>
                  <Typography variant="body1">Subscribes</Typography>
                </Box>
                <Box sx={{ marginTop: "28px" }}>
                  <IconButton>
                    <AccountBalanceWalletIcon
                      sx={{
                        color: `#e35981`,
                        fontSize: "80px",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                border: `1px solid #e35981`,
                height: "135px",
                width: "380px",
                borderRadius: "10px",
                color: "#e35981",
                marginTop: "8px",
                padding: "4px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography sx={{ marginTop: "40px" }} variant="h3">
                    207
                  </Typography>
                  <Typography variant="body1">Subscribes</Typography>
                </Box>
                <Box sx={{ marginTop: "28px" }}>
                  <IconButton>
                    <CompareArrowsIcon
                      sx={{
                        color: `#e35981`,
                        fontSize: "80px",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                border: `1px solid #e35981`,
                height: "135px",
                width: "380px",
                borderRadius: "10px",
                color: "#e35981",
                marginTop: "8px",
                padding: "4px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography sx={{ marginTop: "40px" }} variant="h3">
                    207
                  </Typography>
                  <Typography variant="body1">Subscribes</Typography>
                </Box>
                <Box sx={{ marginTop: "28px" }}>
                  <IconButton>
                    <OndemandVideoIcon
                      sx={{
                        color: `#e35981`,
                        fontSize: "80px",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Paper
            sx={{
              height: "600px",
              "& .MuiPaper-root": {
                position: "absolute",
                top: "790px",
                width: "82%",
              },
            }}
            elevation={2}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: "6px",
              }}
            >
              <Box>
                <IconButton>
                  <MonetizationOnIcon
                    sx={{ color: "#fba630", fontSize: "40px" }}
                  />
                </IconButton>
              </Box>
              <Box sx={{ marginTop: "12px" }}>
                <Typography variant="h6">Marketplace</Typography>
                <Typography variant="body1">
                  Explore more than 10 crytocurrency markets.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                border: "1px solid #f8e4ec",
                background: "#f8e4ec",
                marginLeft: "10px",
                marginRight: "10px",
                borderRadius: "10px",
                height: "50px",
                marginTop: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "4px",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold", color: "#8c3246" }}
                  variant="h6"
                >
                  USD Market
                </Typography>
                {isSearchBox && (
                  <TextField
                    placeholder="Search coin"
                    sx={{
                      marginLeft: 90,
                      width: "30%",
                      "& .MuiOutlinedInput-root": {
                        height: "32px",
                        backgroundColor: "#f8e4ec",
                      },
                    }}
                  />
                )}
                <IconButton onClick={handleSearch}>
                  <FilterListIcon />
                </IconButton>
              </Box>
            </Box>
            <MarketPlaceGrid />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default CryptocurrencyView;
