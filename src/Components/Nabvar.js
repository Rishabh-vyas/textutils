import React from 'react'
// import PropTypes from 'prop-types'

import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


// Nabvar.propTypes={
//   tittle: PropTypes.string,
//   aboutText: PropTypes.string,
// }


Nabvar.propTypes={
  tittle:PropTypes.string,
  aboutText: PropTypes.string.isRequired,
}

Nabvar.defaultProps={
  tittle:"Set tittle value",
  aboutText:"Set about value",
}




export default function Nabvar(ram) {

  // const toggleSetDark=()=>{
  //   if(document.getElementById('btn1').id=='btn1'){
  //     console.log(document.getElementById('btn1').id);
  //     document.body.style.backgroundColor="#22092C"
  //   } else if(document.getElementById('btn2').id=='btn2'){
  //     console.log(document.getElementById('btn2').id);
  //     document.body.style.backgroundColor="red"
  //   }
  // }

  

  return (

    
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={ram.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{ram.tittle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <aside className="nav-link" href="/about">{ram.aboutText}</aside>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}

      <div class="form-check form-switch">
        <input class="form-check-input" onClick={ram.fun} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        {/* <label class={`form-check-label text-${ram.modeTextColorType}`} for="flexSwitchCheckDefault ">{ram.modeType}</label> */}
        <label class={`form-check-label text-${ram.modeTextColorType}`} forHtml="flexSwitchCheckDefault ">{ram.modeType}</label>
      </div>
    </div>
  </div>
</nav>


  )
}