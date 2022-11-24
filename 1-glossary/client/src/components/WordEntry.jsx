import React from 'react';
import EditForm from './EditForm.jsx';
import { useState } from 'react';

export default function WordEntry({ updateWord, deleteWord,word }) {
  const [editFlag, setEditFlag] = useState(false);

  const handleEdit = (event) => {
    console.log('handle edit');
    setEditFlag(true);

  }

  const handleDelete = (event) => {
    console.log('handle delete');
    deleteWord(word.word);
  }


  return (
    <div className='container'>

      {!editFlag ?
        <>
          <div>{word.word}</div>
          <br />
          <div>{word.definition}</div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
        :
        <>
          <div>{word.word}</div>
          <br />
          <EditForm updateWord={updateWord} editText={word} showEditform={() => {setEditFlag(!editFlag)}}/>
        </>


      }
    </div>
  )
}