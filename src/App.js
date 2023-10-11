import { Login } from '@mui/icons-material';
import React , {useEffect , useState} from 'react';
import { BrowserRouter as Router , Routes, Route , Navigate } from "react-router-dom";
import '../src/components/CSS/index.css';
import Home from "./mains/Pages/Home";
import SiderBar from './mains/Route/SiderBar';

function App() {  
  const [authen , setauthen] =React.useState(localStorage.getItem("Login") === "true" ? true : false)



  return (
 <>

{authen === false ?    
<Router>
  <Routes>
        <Route path="/"  element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="*" element={<Navigate to="/Home" />} />
    </Routes>
  </Router> : <SiderBar/>}
 </>
  );
}

class NoPage extends React.Component {
  render() {
    return <h1>404</h1>;
    
  }

  
}


export default App;
