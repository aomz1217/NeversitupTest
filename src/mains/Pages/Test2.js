import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../components/CSS/index.css'
import { makeStyles } from "@material-ui/core/styles";

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


function Test2() {
  
  const classes = useStyles();
  const [input, setInput] = React.useState("");


 
let findPermutations = (string) => {
  debugger
  if (!string || typeof string !== "string"){
    
  } else if (string.length < 2 ){
    return string
  }

  let permutationsArray = [] 
   
  for (let i = 0; i < string.length; i++){
    debugger
    let char = string[i]

    if (string.indexOf(char) != i)
    continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }
  return permutationsArray

}

  return (
    
  <div id='Test2'>
      <Box component="form" sx={{ flexGrow: 1, p: 3 }} >
        <Typography variant='h4' >Permutations</Typography>
        

        <div style={{ display:'flex' , alignContent : 'center' , justifyContent : 'center' , marginTop : 100 , marginLeft : 15}}>
          <p style={{ marginTop : 15 , marginRight : 5}} >INPUT : </p> 
          <TextField
          className={classes.root}
          required
          value={input}
          color="secondary"
          onChange={(e) => setInput(e.target.value.replace(/[^a-z]/gi, '').toLowerCase())}
          style={{ borderColor:"#FFF" , width : 400}}
          helperText={!input?"Required Only String Input":""}
         
          
        />
        {/* <Button variant="contained"  sx={{ fontSize : 15, height : "55px" , marginLeft : 2  }} disabled={!input?true:false}  onClick={findPermutations(input)} >Permutations</Button> */}
        
        </div>
         <div style={{ display:'flex' , alignContent : 'center' , justifyContent : 'center' , marginTop : 40}}>
           <p style={{ marginTop : 15 , marginRight : 5}} >OUTPUT : </p> 
           <TextField disabled multiline maxRows={99}   className={classes.root} style={{ display:'flex' , alignContent : 'center' , justifyContent : 'center',color :'#FFF' , width : 400}}  value={(JSON.stringify(findPermutations(input)) == "[]"?"":JSON.stringify(findPermutations(input)))}>  
          </TextField>
         </div>
      </Box>
</div>
  )
}
export default  Test2;
