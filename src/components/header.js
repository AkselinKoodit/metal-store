import React from 'react';
import Navigation from './Nav';

function Header() {
  return (
    <header className="header">
      <Navigation />
      <h1>Welcome to the Metal store!</h1>
    </header>
  );
}

export default Header;
