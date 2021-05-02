import React from 'react';

const SearchBar = (props) => {
  const onSubmit = () => {
    console.log('ho');
  };
  return (
    <form className='search-bar' onSubmit={onSubmit}>
      <div className='search-bar__inputbox'>
        <input className='search-bar__input' type='text' placeholder='Search' />
        <button className='search-bar__virtual-keyboard'>
          <i className='fas fa-keyboard'></i>
        </button>
      </div>
      <button className='search-bar__btn'>
        <i className='fas fa-search'></i>
      </button>
      <button className='search-bar__mic btn-icon'>
        <i className='fas fa-microphone'></i>
      </button>
    </form>
  );
};

export default SearchBar;
