import React from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types'

TextArea.propTypes={
  heading: PropTypes.string.isRequired,
}

TextArea.defaultProps={
  heading : "jayyy"
}

export default function TextArea(props) {

  const[text,setText]=useState('');

  const upClick=()=>{

    if(document.getElementById('myBox').value.length>0){
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlertMsg("Converted to upper case ! ","success");
    }else{
      props.showAlertMsg("Enter text ! ","danger");
    }

   
    
  }
  
  const onValueChnage=(event)=>{
      setText(event.target.value);
  }

  const removeExtraSpaceClick=()=>{

    if(document.getElementById('myBox').value.length>0){

        let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlertMsg("Extra spaces remove !","success");

    }else{
      props.showAlertMsg("Enter text ! ","danger");
    }

    
  
  }

  const copyTextClick=()=>{


    if(document.getElementById('myBox').value.length>0){

      var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    copyText.setSelectionRange(0, 99999);
    props.showAlertMsg("text copied ! ","success");
    }else{
      props.showAlertMsg("Enter text ! ","danger");
    }

    
  
  }

  const lowClick=()=>{

    if(document.getElementById('myBox').value.length>0){
      setText(text.toLowerCase());
    props.showAlertMsg("Converted to lower case ! ","success");

    }else{
      props.showAlertMsg("Enter text ! ","danger");
    }

    
    
  }

  const remClick=()=>{

    if(document.getElementById('myBox').value.length>0){
      setText("");
      props.showAlertMsg("Remove all !","success");
    }else{
      props.showAlertMsg("Enter text ! ","danger");
    }
    
  }


  return (
    <>
        <div className='container' style={{color:props.mode==='dark'?'white ':'#041736'}}>
                <h2 style={{color:props.mode==='dark'?'white':'#041736'}}>{props.heading}</h2>
                  <div>
                      <textarea style={{backgroundColor:props.mode==='dark'?'#041736':'white',color:props.mode==='dark'?'white ':'#041736',
                      placeholderTextColor :props.mode==='dark'?'white ':'#041736'}}
                      className="form-control my-3" value={text} placeholder='Enter Text' id="myBox" onChange={onValueChnage} rows="10"></textarea>
                  </div>
                <button className="btn btn-primary mx-2 my-2" onClick={upClick}>Convert to Upparecase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={lowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaceClick}>Remove extra spaces</button>
                <button className="btn btn-primary mx-2 my-2" onClick={copyTextClick}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={remClick}>Clear all</button>
        </div>

        <div className="container my-4" style={{color:props.mode==='dark'?'white ':'#041736'}}>

          <h3>Text Summary</h3>
          <p>{(0.008*(text.split(" ").length))} Mintue to read </p>
          <p>{(text.split(" ").length)-1} Words and {text.length} Character</p>
          <p>{text.length>0?text:"Enter text im below text area to prview "}</p>

        </div>

    </>
  )
}
  