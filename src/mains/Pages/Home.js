import React , {useEffect , useState} from 'react'
import SiderBar from '../Route/SiderBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../../components/CSS/Home.css'
import star from'../../assets/star.png'
import mountf from'../../assets/mount_front.png'
import mountbh from'../../assets/mount_behind.png'
import moon from'../../assets/moon.png'
import { Navigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import { styled } from '@mui/material/styles';
/* icon */
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { Login } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Toast from '../../components/Toast/Toast'
/***************************************************/ 



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

function Home() {

let starv  = document.getElementById('star')
let moonv  = document.getElementById('moon')
let mountbhv  = document.getElementById('mountbh')
let text  = document.getElementById('text')
let btn  = document.getElementById('btn')
let mountfv  = document.getElementById('mountf')
let header = document.querySelector('header')
let dialoglogin = document.getElementById('dialoglogin')

const [offset, setOffset] = useState(0);

const { height, width } = useWindowDimensions();
const [toast,setToast] = useState(false)
useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
  
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

console.log(offset); 

  window.addEventListener('scroll', function(){
    
    starv.style.left = offset * 0.25 + 'px'
    moonv.style.top = offset * 0.75 + 'px'
    mountbhv.style.top = offset * 0.5 + 'px'
    mountfv.style.top = offset * 0 + 'px'
    text.style.marginRight = offset * 2.5 + 'px'
    text.style.marginTop = offset * 0.75 + 'px'
    btn.style.marginTop = offset * 1.5 + 'px'
    header.style.top = offset * 0.5 + 'px'
    
  })

 
  const handleLogin = () => {

  localStorage.setItem("Login","true")
  setToast(true);
//   const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 1200,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//      setTimeout(() => {
  
//   window.location = "/Main"
// }, 1200);
//   }
//   })

//   Toast.fire({
//   icon: 'success',
//   title: 'Welcome !'
// })
 

  };
 
  return ( 
    
   <html>
      <head>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body id='bodyhome'>

<header id='headerhome'>
  <a  href="./" class="logo">Logo</a>
  <ul>
    <li><a href='#contact'>Contact</a></li>

  </ul>
</header>
<section>
<img src={star} id="star"/>
<img src={moon} id="moon"/>
<img src={mountbh} id="mountbh"/>
<h2 id="text"></h2>
<a href='#' id="btn" onClick ={() => {handleLogin()}}>Start</a>


<img src={mountf} id="mountf"/>
</section>

<div class="footer" id="contact">
<h2>Contact</h2>

<Grid container direction={"column"} justifyContent={"space-between"} alignItems={"center"} style={{ marginTop : 70}}>
  <Grid xs={6} style={{ display: "flex"}}>
    <EmailIcon sx={{ fontSize: 40 , color:"#FFF" , marginRight : 3}}></EmailIcon>
    <p>peeranut_k@kkumail.com</p>
  </Grid>
  <Grid xs={6}  style={{ display: "flex" , marginTop : 30}}>
     <CallIcon sx={{ fontSize: 40 , color:"#FFF"  , marginRight : 3}}></CallIcon>
    <p>06-1026-1801</p>
  </Grid>
</Grid>
<Toast 
type = 'success' 
open = {toast} 
locate = '/Main' 
title = 'Welcome !'/>
</div>
</body>
</html>
  )

}
export default Home;
