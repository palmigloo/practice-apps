import React from 'react';
import WordEntry from './WordEntry.jsx';

export default function Words({words, deleteWord, updateWord}) {
  return (
    <div className='container'>
      {
        words.map((word) => {
          return <WordEntry updateWord={updateWord} deleteWord={deleteWord} word={word} key={word._id}/>
        })
      }
    </div>
  )
}