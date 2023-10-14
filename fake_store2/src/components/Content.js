import React from 'react';
import {Outlet} from 'react-router-dom'

const Content = () => {
  return (
    <div className='Content-root'>
      <Outlet/>
    </div>
  )
}

export default Content;