import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode,setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const changeMode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success");
    }
  }


  return (
    <Router>
        <Navbar title="TextUtils" mode={mode} changeMode={changeMode} />
        <Routes>
            <Route exact path='/' element={
            <>
            <Alert alert={alert}/>
            <TextForm heading="Enter The text to analyze below" mode={mode} showAlert={showAlert}/>
            </>} >
            </Route>
            <Route exact path='/about' element={<About/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
