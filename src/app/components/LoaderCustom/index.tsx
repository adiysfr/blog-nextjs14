import React from 'react'
import './style.css'

const LoaderCustom = () => {
  return (
    <div className='wrapper-loader'>
      <div className="spinner">
        <div></div>   
        <div></div>    
        <div></div>    
        <div></div>    
      </div>
    </div>
  )
}

export default LoaderCustom