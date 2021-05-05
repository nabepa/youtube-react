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
      <div className={styles.logo}>
        <img className={styles.img} src='/images/logo.png' alt='logo' />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
        <input
          ref={inputRef}
          className={styles.input}
          type='search'
          placeholder='Search...'
        />
        <button className={styles.button} type='submit'>
          <img
            className={styles.buttonImg}
            src='/images/search.png'
            alt='search'
          />
        </button>
      </form>
    </header>
  );
});

export default SearchHeader;
