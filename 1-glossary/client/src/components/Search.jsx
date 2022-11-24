import React from 'react';
import { useState } from 'react';

export default function Search({ searchWord }) {

  const [keyword, setKeyword] = useState('');

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setKeyword(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchWord(keyword);
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>
          Search for words :
          <input
            type="text"
            name='keyword'
            value={keyword}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type='submit' value='Search' />
      </form>
    </div>
  )
}