import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import TableData from "../shared/tableData";




let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";

const DataTableView = ( {
    isDrawerMargin = true,
    themeColor = "#e35981",
    lightColor = "",
    isTable = false,})=>{
        
      return (
        <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: "#b22362" }} variant="h4">
              Data Table
            </Typography>
            <Typography sx={{ marginLeft: "16px" }} variant="body1">
              App / Tables / Data-Table
            </Typography>
          </Box>
         <TableData/>
        </Box>
      );
}


export default DataTableView;