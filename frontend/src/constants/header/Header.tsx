import "./Header.css"
import {AppBar, Toolbar, IconButton, Typography, colors, Stack, Link} from "@mui/material"
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import { createTheme } from '@mui/material/styles';
import FaceIcon from '@mui/icons-material/Face';
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
    const theme = createTheme({
        palette: {
            secondary: {
                main: '#512da8'
            },
        },
    });
  return(
      <div>
          <AppBar id={"menu"} sx={{backgroundColor:theme.palette.secondary.main}} position="static">
              <Toolbar variant="dense">
                  <IconButton edge="start" size={"large"} color={"inherit"}  aria-label="menu" sx={{ mr: 3 }}>
                      <AutoStoriesTwoToneIcon></AutoStoriesTwoToneIcon>
                  </IconButton>
                  <Typography variant="h6" color="inherit" component="div" sx={{flexGrow:1}}>
                      Friends with Benefits
                  </Typography>
                  <Stack direction={"row"} spacing={5} alignSelf={"center"} sx={{flexGrow:10}} >
                      <Link underline={"none"} href={"/"} color={"inherit"} component={"h3"}>Home</Link>
                      <Link underline={"none"} href={"/books"} color={"inherit"} component={"h3"}>Books</Link>
                      <Link underline={"none"} href={"/authors"} color={"inherit"} component={"h3"}>Authors</Link>
                      <Link underline={"none"} href={"/login"} color={"inherit"} component={"h3"}>Login</Link>
                      <Link underline={"none"} href={"/about"} color={"inherit"} component={"h3"}>About</Link>
                      <IconButton edge="end" size={"small"} color={"inherit"}  aria-label="menu" >
                          <SearchIcon></SearchIcon>
                      </IconButton>
                  </Stack>
                  <IconButton edge="end" size={"large"} color={"inherit"}  aria-label="menu" sx={{ ml: 3 }}>
                      <FaceIcon></FaceIcon>
                  </IconButton>
              </Toolbar>
          </AppBar>
      </div>);
}