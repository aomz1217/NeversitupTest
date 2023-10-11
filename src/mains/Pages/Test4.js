import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled, useTheme } from '@mui/material/styles';
import '../../components/CSS/index.css'
import { makeStyles } from "@material-ui/core/styles";
import { Maximize } from '@mui/icons-material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000"
    },
    "& .MuiOutlinedInput-input": {
      color: "#000"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#000"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#000"
    },
    "& .MuiInputLabel-outlined": {
      color: "#000"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#000"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#000"
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



function Test4() {
  const dummy = [
  {
    value: [],
    label: "Empty Array",
  },
  {
    value: [':)', ';(', ';}', ':-D'],
    label: "[ ' :) ' , ' ;( ' , ' ;} ' , ' :-D ' ]",
  },
  {
    value: [';D', ':-(', ':-)', ';~)'],
    label: "[' ;D ' , ' :-( ' , ' :-) ' , ' ;~) ' ] ",
  },
  {
    value: [';]', ':[', ';*', ':$', ';-D'],
    label: "[ ' ;] ' , ' :[ ' , ' ;* ' , ' :$ ' , ' ;-D ']",
  },
  
];
   const classes = useStyles();
   const [input, setInput] = React.useState("");
  
  let findSmile = (inp) => {
  debugger
  if (inp.length == 0 || inp == ""){
    return 0
  } else if (inp.length > 0 ){
  let Array = inp.split(",")
  let count = 0
  for (let i = 0; i < Array.length; i++){
    debugger
    let firstVal = Array[i]
    let Arrayforvalid = []
    const cha1 = /[:;]/;
    const cha2 = /[-~]/;
    const cha3 = /[)D]/;
    Arrayforvalid = firstVal.split('')
    if (Arrayforvalid.length == 2){
   
     if (cha1.test(Arrayforvalid[0]) == true){
     
        if (cha3.test(Arrayforvalid[1]) == true){
          count = count + 1
      }
    }
    }
    else if (Arrayforvalid.length == 3){
       if (cha1.test(Arrayforvalid[0]) == true){
           if (cha2.test(Arrayforvalid[1]) == true){
              if (cha3.test(Arrayforvalid[2]) == true){
                count = count + 1
         }
      }
    }
  }
  
  
  }
  return count
}

}


  return (
    <div id='Test2'>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
        <Typography variant='h4' >CountSmileys</Typography>
        
        <div style={{ display:'flex' , alignContent : 'center' , justifyContent : 'center' , marginTop : 100 , marginLeft : 35}}>
          <p style={{ marginTop : 15 , marginRight : 5}} >INPUT : </p> 
          <TextField
          select
          
          value={input}
          className={classes.root}
          onChange={(e) => setInput(e.target.value) }
          style={{ borderColor:"#FFF" , width : 400}}
          helperText={!input?"Please Select An Array":""}
          SelectProps={{native : true}}
          > 
          {dummy.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
           </TextField>

        </div>
         <div style={{ display:'flex' , alignContent : 'center' , justifyContent : 'center' , marginTop : 40 ,marginLeft :20}}>
           <p style={{ marginTop : 15 , marginRight : 5}} >OUTPUT : </p> 
           <TextField disabled multiline maxRows={99} className={classes.root} style={{ display:'flex' , alignContent : 'center' , justifyContent : 'center',color :'#FFF' , width : 400}}  value={findSmile(input)} >  
          </TextField>
           
         </div>
      </Box>
</div>
  )
}
export default Test4;