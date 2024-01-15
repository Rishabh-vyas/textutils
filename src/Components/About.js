import React, { useState } from 'react'


export default function About() {

    const [btnText,setBtnText]=useState("Enable dark mode");
    const [myStyle,setMyStyle]=useState(
        {
            color: '#041736',
            backgroundColor: 'white'
        }
    );

    const toggleBtn=()=>{

        if(myStyle.color==='#041736')
        {
            setMyStyle(
                {
                    color: 'white',
                    backgroundColor: '#041736',
                    border: '1px solid white'
                }
            )
            setBtnText("Set light mode");
        }else{
            setMyStyle(
                {
                    color: '#041736',
                    backgroundColor: 'white'
                }
            )
            setBtnText("Set dark mode");
        }
        
    }

  return (
    <div className="container" style={myStyle}>
        <h2 className="my-3" >About Us </h2>
            <div className="accordion accordion-flush" id="accordionFlushExample" >
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" >
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div  id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
            <button className="btn btn-primary mx-2 my-3" onClick={toggleBtn}>{btnText}</button>
            </div>
    </div>
  )
}
