import { Box } from "@mui/system";
import { Typography, IconButton, Button } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
let defaultColor = "#e35981";
const TodoView = ({ isDrawerMargin = true, themeColor = "#e35981" }) => {
  function createData(name) {
    return { name };
  }

  const rows = [
    createData("Frozen yoghurt"),
    createData("Ice cream sandwich"),
    createData("Eclair"),
    createData("Cupcake"),
    createData("Gingerbread"),
    createData("Frozen yoghurt"),

    createData("Ice cream sandwich"),
    createData("Eclair"),
    createData("Cupcake"),
    createData("Gingerbread"),
  ];

  return (
    <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{ color: `${!!themeColor ? themeColor : defaultColor}` }}
          variant="h4"
        >
          Todo
        </Typography>
        <Typography sx={{ marginLeft: "16px" }} variant="body1">
          App / Pages / Todo
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: `${!!themeColor ? themeColor : defaultColor}`,
          padding: 3,
          borderRadius: "12px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            <IconButton
              sx={{
                border: "1px solid white",
                backgroundColor: "white",
                borderRadius: "30px",
              }}
            >
              <PlaylistAddCheckIcon sx={{ color: "red" }} fontSize="large" />
            </IconButton>
            <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
              <Typography
                variant="caption"
                sx={{ fontSize: "20px", color: "#b04158" }}
              >
                To Do Apps
              </Typography>
              <Typography>
                󠁥󠁮󠁧󠁿All Your to do list. Just check it whenever You done.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            mt: 3,
            height: 70,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="What needs to be done?"
          />

          <Button
            sx={{
              p: "10px",
              backgroundColor: "#ececec",
              color: "gray",
              borderRadius: "20px",
              fontSize: "12px",
            }}
          >
            Press enter to submit task
          </Button>
        </Paper>

        <Box align="right" sx={{ display: "flex", gap: 1, ml: "75%", mt: 1 }}>
          <Typography variant="body2" sx={{ fontSize: "10px" }}>
            Once you submit, its mean you have agreed with our
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "10px",
              textDecoration: "underline",
              color: "#479bf3",
            }}
          >
            terms and conditions
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button sx={{ color: "#b04158" }}>VIEW ALL</Button>/
          <Button sx={{ color: "gray" }}>ACTIVE</Button>/
          <Button sx={{ color: "gray" }}>COMPLETED</Button>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Button
                      size="small"
                      sx={{
                        color: "gray",
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "#ededed",
                        mr: 2,
                      }}
                    >
                      <DoneIcon />
                    </Button>
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ width: 200 }}>
                    <Button
                      size="small"
                      sx={{
                        color: "gray",
                        height: 40,
                        borderRadius: "60%",
                        backgroundColor: "#ededed",
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: "gray",
                        height: 40,
                        borderRadius: "60%",

                        backgroundColor: "#ededed",
                        ml: 2,
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TodoView;
