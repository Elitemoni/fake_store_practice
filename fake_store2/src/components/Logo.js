import React from 'react';
import img from '../images/logo.jpg';

const Logo = () => {
  return (
    <div className="Logo-root">
      <img className='Logo-img' src={img}></img>
    </div>
  )
}

export default Logo;