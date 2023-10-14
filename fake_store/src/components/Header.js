import React from 'react';
import Logo from './Logo.js';
import SearchBar from './SearchBar.js';
import Nav from './Nav.js';

const Header = () => {
  return (
    <div className="Header-root">
      <Logo/>
      <SearchBar/>
      <Nav/>
    </div>
  )
}

export default Header;