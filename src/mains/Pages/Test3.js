import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled, useTheme } from '@mui/material/styles';
import '../../components/CSS/index.css'
import { makeStyles } from "@material-ui/core/styles";
import { Maximize } from '@mui/icons-material';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFF"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFF"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFF"
    },
    "& .MuiOutlinedInput-input": {
      color: "#FFF"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#FFF"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#FFF"
    },
    "& .MuiInputLabel-outlined": {
      color: "#FFF"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#FFF"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#FFF"
    },
    "& .Mui-error": {
        color: "yellow"
      },
      "& .MuiFormHelperText-root": {
        color: "yellow"
      }
    
  },
  error: {}
});



function Test3() {

   const classes = useStyles();
   const [input, setInput] = React.useState("");
   const [arr, setArr] = React.useState([]);
  const [arrodd, setArrOdd] = React.useState([]);
  function Add  (x) {
    setArr(current  => [...current,x])
    setInput("")
  
   }
    const handleChange = (e) => {
    const valid = /^[0-9\b]+$/;
    if (e.target.value === "" || valid.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

function findOddInt() {
    if (arr.length > 0) {
      setArrOdd([])
let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);

    var x = [ arr.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev
    }, {})]
   
    console.log(x);
    if(x != []){
      
      let fil = []
      let test = x.filter((x) => fil.push(x))
      // var result = test[0].filter((y) => y)

      console.log(test[0][1]);
      console.log(unique);
      
      if(unique.length > 0 ){
        debugger
         for (let i = 0; i < unique.length; i++) {
          debugger
          if (test[0][parseInt(unique[i])] % 2 === 1){
            setArrOdd(current => [...current,unique[i]])
          }
         }
      }
     
    }
    }
    
   
  }

 

  return (
    <div id='Test2'>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
        <Typography variant='h4' >Find the odd int</Typography>
         <div style={{ display:'flex' , alignContent : 'center' , justifyContent : 'center' , marginTop : 40}}>
           <p style={{ marginTop : 15 , marginRight : 5}} >Your Array : </p> 
           <TextField disabled multiline maxRows={99} className={classes.root} value = {JSON.stringify(arr) == "[]"?"":JSON.stringify(arr)} style={{ display:'flex' , alignContent : 'center' , justifyContent : 'center',color :'#FFF' , width : 400 } } 
            helperText={"This is display of your input it will add into the array"}  >  
          </TextField>
          <Button variant="contained"  sx={{ fontSize : 15, height : "55px" , marginLeft : 2  }} disabled={JSON.stringify(arr) == "[]"?true:false}  onClick = {() => {setArr([]); setArrOdd([]);}} >Clear Array</Button>
         </div>

        <div style={{ display:'flex' , alignContent : 'center' , justifyContent : 'center' , marginTop : 20 , marginLeft : 35}}>
          <p style={{ marginTop : 15 , marginRight : 5}} >INPUT : </p> 
          <TextField
          required
          value={input}
          className={classes.root}
          onChange={(e) =>  handleChange(e)}
          style={{ borderColor:"#FFF" , width : 400}}
          helperText={!input?"Required Only Interger Input":""}
           inputProps={{ maxLength: 1 }}
        />
        <Button variant="contained"  sx={{ fontSize : 15, height : "55px" , marginLeft : 2 , width : 130 }} disabled={!input?true:false}  onClick = {() => Add(input) } >Add</Button>
        
        </div>
         <div style={{ display:'flex' , alignContent : 'center' , justifyContent : 'center' , marginTop : 40 ,marginLeft :20}}>
           <p style={{ marginTop : 15 , marginRight : 5}} >OUTPUT : </p> 
           <TextField disabled multiline maxRows={99} className={classes.root} style={{ display:'flex' , alignContent : 'center' , justifyContent : 'center',color :'#FFF' , width : 400}} value={arrodd}  >  
          </TextField>
            <Button variant="contained"  sx={{ fontSize : 15, height : "55px" , marginLeft : 2 , width : 130 }} disabled={JSON.stringify(arr) == "[]"?true:false}   onClick = {() => findOddInt() } >Check</Button>
         </div>
      </Box>
</div>
  )
}
export default Test3;