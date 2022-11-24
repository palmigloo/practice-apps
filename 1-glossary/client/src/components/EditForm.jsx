import React from 'react';
import {useState} from 'react';

export default function EditForm({ updateWord, editText, showEditform }) {

  const [definition, setDefinition] = useState(editText.definition);

  const handleInputChange = (event) => {
    console.log('handle onchange for form');
    setDefinition(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateWord(editText.word, definition);
    showEditform();
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
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
        <input type='submit' value='Update'  />
      </form>
      <button onClick={showEditform}>Cancle</button>
    </div>
  )
}