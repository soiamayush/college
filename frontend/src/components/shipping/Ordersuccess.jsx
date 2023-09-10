import React from 'react'
import "./shipping.scss"
import MetaData from '../layouts/MetaData'

const Ordersuccess = () => {
  return (
    <div className='parentsuccess'>
            <MetaData title={'Order Success'} />

      <div className="cardp">
      <div className='check'>
        <i className="checkmark">✓</i>
      </div>
        <h1 className='htext'>Success</h1> 
        <p className='ptext'>We received your purchase request;<br/> we'll be in touch shortly!</p>
      </div>
    </div>
  )
}

export default Ordersuccess