import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <a className="navbar-brand" href="#">Talking <br /> <span>Travel</span></a>
      </div>
      <div className="nav-elements">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Story</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href=""><SearchOutlinedIcon /></a></li>
          <li><a href=""><PersonOutlinedIcon /></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

