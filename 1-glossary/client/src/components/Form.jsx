import React from 'react';
import {useState} from 'react';

export default function Form({ saveWord }) {

  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleInputChange = (event) => {
    console.log('handle onchange for form');
    const target = event.target;
    const value = target.value;
    const name = target.name;
    name === 'word' ? setWord(value) : setDefinition(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    saveWord(word, definition);
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>
          Word:
          <input
            type="text"
            name='word'
            value={word}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Definition:
          <input
            type="text"
            name='definition'
            value={definition}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <input type='submit' value='Add word'  />
      </form>
    </div>
  )
}