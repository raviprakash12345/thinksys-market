import React, { PureComponent } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import TimelineIcon from "@mui/icons-material/Timeline";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IconButton } from "@mui/material";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AreaChartView = () => {
  return (
    <>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <Box sx={{ display: "flex" }}>
        <IconButton>
          <TimelineIcon sx={{ color: "pink", fontSize: "40px" }} />
        </IconButton>
        <Typography sx={{ fontWeight: "bold" }} variant="h6">
          Performance Indicator
        </Typography>
      </Box>
      <AreaChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#5b96e5"
          fill="#5b96e5"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#bf83cf"
          fill="#bf83cf"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#8273eb"
          fill="#8273eb"
        />
      </AreaChart>
      {/* </ResponsiveContainer> */}
    </>
  );
};

export default AreaChartView;
