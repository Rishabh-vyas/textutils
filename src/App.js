// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Nabvar from './Components/Nabvar';
import TextArea from './Components/TextArea';
import Alerts from './Components/Alerts';
// import React from "react";
// import About from './Components/About';



// import {
//   BrowserRouter as Router,
//   Routes ,
//   Route,
//   Link
// } from "react-router-dom";




function App() {

  const[mode,setMode]=useState("light");
  const[modeText,setModText]=useState("Light mode");
  const[modeTextColor,setModTextColor]=useState("Dark");
  const[alertText,setAlertText]=useState(null);
 
  
  const showAlertMsg=(message,type)=>{
    setAlertText(
      {
        msg:message,
        type:type
      }
    );
    setTimeout(() => {
      setAlertText(null);
    }, 1500);

  }

  const toggleSetDark=()=>{
    if(document.getElementById('btn1')==="btn1"){
      document.body.style.backgroundColor="#22092C"
    }
  }

  const toggleModeControl=()=>{
    if(mode==='light'){
      setMode('dark');
      setModText("Dark Mode");
      setModTextColor('light');
      document.body.style.backgroundColor="#041736"
      showAlertMsg("Dark mode enabaled","success");
    }else{
      setMode('light');
      setModText("Light Mode");
      setModTextColor('dark');
      document.body.style.backgroundColor="white"
      showAlertMsg("Light mode enabaled","success");
    }
  }

  
  return (
   <>
      
      {/* <Router> */}
      <Nabvar tittle="TextUtils" aboutText="About" toggleSetDark={toggleSetDark} mode={mode} fun={toggleModeControl} modeType={modeText} modeTextColorType={modeTextColor}/>


      <Alerts alert={alertText}/>

      <div className="container my-4">
      <TextArea showAlertMsg={showAlertMsg} heading="Enter text :-" mode={mode}/>
      
    

      {/* <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<TextArea showAlertMsg={showAlertMsg} heading="Enter text :-" mode={mode}/>} />
      </Routes>  */}

      {/* </Router> */}
     
      </div>
   </>
  );
}
export default App;
