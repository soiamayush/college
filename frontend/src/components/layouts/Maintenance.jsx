import React, { Fragment } from 'react'
import "./maintenance.css"
import construction from "../../assets/images/construction.png"
import { Link } from 'react-router-dom'

const Maintenance = () => {
  return (
    <Fragment>
    <div className=" center-content">
  <div className="cardmm">
    <span className='constpara'>
    <h1 className='dflex' style={{marginBottom : "20px"}}>Our website is currently under maintenance</h1>
    <p className=''>Please try again in a few minutes or contact us on xxx-xxx-xxxx or at {" "}<Link to="mailto:support@becca.com">support@becca.com</Link></p>
    </span>
    <img src={construction} alt="Lightwire.co.nz is taking a short break" className="img-responsive"/>
  </div>
</div>

    </Fragment>
    

  )
}

export default Maintenance