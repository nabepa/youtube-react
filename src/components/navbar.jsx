import React, { memo } from 'react';
import SearchBar from './searchBar';
import logo_img from '../images/logo.png';

const NavBar = memo((props) => {
  return (
    <nav>
      <div className='left-side'>
        <button className='open-sidebar btn-icon'>
          <i className='fas fa-bars'></i>
        </button>
        <a className='home' href='javascript:void(0)'>
          <img className='home__logo' src={logo_img} alt='YOUTUBE' />
          <span className='home__youtube'>Youtube</span>
          <span className='home__local'>JP</span>
        </a>
      </div>

      <div className='center-side'>
        <SearchBar onSearch={props.onSearch} />
      </div>

      <div className='right-side'>
        <button className='create-video btn-icon'>
          <i className='fas fa-file-video'></i>
        </button>
        <button className='youtube-apps btn-icon'>
          <i className='fas fa-th'></i>
        </button>
        <button className='notification btn-icon'>
          <i className='fas fa-bell'></i>
        </button>
        <button className='user'>n</button>
      </div>
    </nav>
  );
});

export default NavBar;
