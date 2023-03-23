import React, { ChangeEvent } from 'react';
import './nav.styles.css';

type ISearchBoxProps = {
  onSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Nav = ({ onSearchHandler } : ISearchBoxProps) => {
    return (
      <div className='nav'>
        <h1>Search Cocktail</h1>
        <input type='search' className='search-box' onChange={onSearchHandler} placeholder='Search Cocktail' />        
      </div>
    );
}

export default Nav;
