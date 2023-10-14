import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Layout;