import React , {useEffect , useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BrowserRouter as Router , Routes, Route , Navigate  , Outlet} from "react-router-dom";
import Home from "../Pages/Home";
import Test2 from "../Pages/Test2";
import Test3 from "../Pages/Test3";
import Test1 from "../Pages/Test1";
import Test4 from "../Pages/Test4";
import { makeStyles ,withStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link'
import '../../components/CSS/index.css'
import Swal from 'sweetalert2';
/** icon */
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import QuizIcon from '@mui/icons-material/Quiz';
import Toast from '../../components/Toast/Toast';
/** icon */


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  background: '#654A8E',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  background: '#654A8E',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 30px)`,
 
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${0}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#463561",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    "&$selected:hover": {
      backgroundColor: "#423060",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    "&:hover": {
      backgroundColor: "#523F6F",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    }
  },
  selected: {}
})(MuiListItem);

export default function SiderBar(props) {

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }

  useEffect(() => {
    const items = localStorage.getItem('index');
    if (items) {
      setSelectedIndex(parseInt(items));
    }
  }, []);
  const [toast, setToast] = useState(false)
  const theme = useTheme();
  const [open, setOpen] = React.useState(localStorage.getItem("sidebar") === "opened" ?  true : false );
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleDrawerOpen = () => {
      setOpen(true);
      localStorage.setItem("sidebar", "opened");
  
  };
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    
    if (width <= 700) {
      setOpen(false);
      localStorage.clear("sidebar")
    }
  }, [width],[open]);

  useEffect(() => {
    
    if (window.location.pathname === '/Test1') {
     
      setSelectedIndex(0)
    }
  }, [window.location.pathname]);


  const menu = [
    {
      route: "/Test1",
      label: "Project Structure",
      icon: (selectedIndex === 0 ? <QuizIcon /> : <QuizOutlinedIcon />),
    },
    {
      route: "/Test2",
      label: "Permutations",
      icon: (selectedIndex === 1 ? <QuizIcon /> : <QuizOutlinedIcon />),
    },
    {
      route: "/Test3",
      label: "Find the odd int",
      icon: (selectedIndex === 2 ? <QuizIcon /> : <QuizOutlinedIcon />),
    },
    {
      route: "/Test4",
      label: "CountSmileys",
      icon: (selectedIndex === 3 ? <QuizIcon /> : <QuizOutlinedIcon />),
    }
 

  ];
  
  const handleDrawerClose = () => {
      setOpen(false);
      localStorage.setItem("sidebar", "closed");
    
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    localStorage.setItem("index", index);
  };
  const handleLogOutClick = (event, index) => {
    localStorage.setItem("Login", "false");
   
    setToast(true)

  };

  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: '#654A8E' }} elevation={5} >
        <Toolbar style={{ left: width > 600 ? "" : ""}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open === true ? handleDrawerClose : width > 500 ? handleDrawerOpen : null}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open),
            }}
            style = {{ visibility: width > 600 ? "" :"hidden"}}
          >
            <MenuIcon />
          </IconButton>
          <div id ="header">
          <IconButton  noWrap  disableRipple button onClick={function(event){window.location = "/Test1"; handleListItemClick(event, 0);}} style={{ backgroundColor: 'transparent' , marginLeft:'20px' }}>
            <div id="cusitalic">LOGO</div>
          </IconButton>
          </div>
           <IconButton style={{ backgroundColor: 'transparent' ,color :'#fff' ,position: 'absolute',top: 0,right: 0 , marginTop:15 , marginRight:20}} 
           noWrap  disableRipple button onClick={function(event){handleLogOutClick(event, 0);}} >
            <LogoutIcon ></LogoutIcon>
          </IconButton>
        </Toolbar>
      </AppBar >
      <Drawer variant="permanent" open={open}>
        <DrawerHeader >
        </DrawerHeader>
        <Divider />
        <List >
          {menu &&
            menu.map((item, index) => {
              return (
                <ListItem
                  id={index}
                  component={Link} href={item.route}
                  button
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                  style={{ textDecoration : "unset" , display:"flex",justifyContent:"center" ,flexDirection: open === true ? "" :"column",flex:1}}
                >
                 <ListItemIcon style={{ color: "#fff" , display:"flex" , justifyContent : open === true ? "" : "center" , minWidth : "45px"}} >
                    {item.icon}
                  </ListItemIcon>
                  {open === true ? <ListItemText style={{ color: "#fff"}} primary={item.label} /> : <ListItemText style={{ color: "#fff" }} primaryTypographyProps={{fontSize: '10px'}}  primary={item.label} /> } 
                </ListItem>

              );
            })}

        </List>
      </Drawer>

    
       
      <Box component="main" sx={{ flexGrow: 1}}>
        <DrawerHeader />
    
        <Router>
  <Routes>
        <Route path="/"  element={<Navigate to="/Test1" />} />
         <Route path="/Test1" element={<Test1/>} />
        <Route path="/Test2" element={<Test2 />} />
        <Route path="/Test3" element={<Test3 />} />
         <Route path="/Test4" element={<Test4 />} />
        <Route path="*" element={<Navigate to="/Test1" />} />
      
    </Routes>
  </Router>
  <Outlet />
      </Box>
      <Toast 
type = 'success' 
open = {toast} 
locate = '/Home' 
title = 'See You Again !'/>
    </Box>
   
  );
}
  <Toast
       type='success'
       toast={Toast}
       title='See You Again !'
       locate='/Home'
  />
class NoPage extends React.Component {
  render() {
    return <h1>404</h1>;
  }

  
}

