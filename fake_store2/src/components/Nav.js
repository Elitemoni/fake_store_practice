import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Nav-root'>
      <Link to='Cart' className='Nav-cart'>
        <div className='Nav-text-cart'>Cart</div>
      </Link>
      <Link to='/' className='Nav-store'>
        <div className='Nav-text-store'>Store</div>
      </Link>
      <Link to='Merchandize' className='Nav-merchandize'>
        <div className='Nav-text-merchandize'>Merchandize</div>
      </Link>
    </div>
  )
}

export default Nav