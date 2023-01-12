import { Box } from "@mui/system";
import { Typography, IconButton,Button } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';





const TodoView = () => {
  return (
    <Box sx={{ marginLeft: "250px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "#b22362" }} variant="h4">
          Todo
        </Typography>
        <Typography sx={{ marginLeft: "16px" }} variant="body1">
          App / Pages / Todo
        </Typography>
      </Box>
      <Box
        sx={{
          width: "98%",
          backgroundColor: "#fbe4ec",
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
                sx={{ fontSize: "20px", color: "#ae3958" }}
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
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:"100%",mt:3,height:70}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
       
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What needs to be done?"
       
      />
    
      
      <Button   sx={{ p: '10px', backgroundColor :"#ececec",color:"gray",borderRadius : "20px",fontSize:"12px"}} >
        Press enter to submit task
      </Button>
    </Paper>

     <Box  align ="right" sx={{display :"flex",gap: 1,ml:"75%",mt :1}}>
         <Typography variant= 'body2'  sx={{fontSize : "10px"}} >Once you submit, its mean you have agreed with our</Typography>
         <Typography variant= 'body2'  sx={{fontSize : "10px",textDecoration : "underline",color : "#479bf3"}} >terms and conditions</Typography>
     </Box>


     <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "#b22362" }} variant="h4">
          Todo
        </Typography>
        <Typography sx={{ marginLeft: "16px" }} variant="body1">
          App / Pages / Todo
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default TodoView;
