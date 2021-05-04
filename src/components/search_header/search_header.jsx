import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handdleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handdleSearch();
  };
  const onkeyPress = (event) => {
    if (event.key === 'Enter') {
      handdleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src='/images/logo.png' alt='logo' />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='Search...'
        onKeyPress={onkeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img
          className={styles.buttonImg}
          src='/images/search.png'
          alt='search'
          className='src'
        />
      </button>
    </header>
  );
};

export default SearchHeader;

// import styles from './search_header.module.css';
// import React, { useRef } from 'react';

// const SearchHeader = ({ onSearch }) => {
//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <img className={styles.img} src='/images/logo.png' alt='logo' />
//         <h1 className={styles.title}>Youtube</h1>
//       </div>
//       <input
//         ref={inputRef}
//         className={styles.input}
//         type='search'
//         placeholder='Search...'
//         onKeyPress={onKeyPress}
//       />
//       <button className={styles.button} type='submit' onClick={onClick}>
//         <img
//           className={styles.buttonImg}
//           src='/images/search.png'
//           alt='search'
//         />
//       </button>
//     </header>
//   );
// };

// export default SearchHeader;
