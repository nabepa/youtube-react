import React from 'react';

const Sidebar = (props) => {
  return (
    <section className='sidebar'>
      <a href='' className='sidebar__home selected'>
        <i class='fas fa-home'></i>
        <span>HOME</span>
      </a>
      <a href='' className='sidebar__explore'>
        <i class='fas fa-compass'></i>
        <span>EXPLORE</span>
      </a>
      <a href='' className='sidebar__subscribe'>
        <i class='fas fa-heart'></i>
        <span>SUBSCRIBE</span>
      </a>
      <a href='' className='sidebar__storage'>
        <i class='fas fa-box-open'></i>
        <span>STORAGE</span>
      </a>
    </section>
  );
};

export default Sidebar;
