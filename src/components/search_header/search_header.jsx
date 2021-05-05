import styles from './search_header.module.css';
import React, { memo, useRef } from 'react';

const SearchHeader = memo(({ onSearch }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const query = inputRef.current.value;
    query && onSearch(query);
    formRef.current.reset();
  };

  return (
    <header className={styles.header}>
      <button className={styles.button}>
        <i className='fas fa-bars'></i>
      </button>

      <div className={styles.logo}>
        <img className={styles.logoImg} src='/images/logo.png' alt='logo' />
        <h1 className={styles.logoTitle}>Youtube</h1>
      </div>

      <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
        <input
          ref={inputRef}
          className={styles.input}
          type='search'
          placeholder='Search...'
        />
        <button className={styles.button}>
          <i className='fas fa-search'></i>
        </button>
      </form>

      <button className={styles.button}>
        <i className='fas fa-video'></i>
      </button>
      <button className={styles.button}>
        <i className='fas fa-th'></i>
      </button>
      <button className={styles.button}>
        <i className='fas fa-bell'></i>
      </button>
      <button className={styles.button}>
        <i class='fab fa-github'></i>
      </button>
    </header>
  );
});

export default SearchHeader;
