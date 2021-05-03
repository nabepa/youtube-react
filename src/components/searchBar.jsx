import React, { memo } from 'react';

const SearchBar = memo((props) => {
  const formRef = React.useRef();
  const inputRef = React.useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const query = inputRef.current.value;
    query && props.onSearch(query);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className='search-bar' onSubmit={onSubmit}>
      <div className='search-bar__inputbox'>
        <input
          ref={inputRef}
          className='search-bar__input'
          type='text'
          placeholder='Search'
        />
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
});

export default SearchBar;
