import React from 'react';
import Form from './Form.jsx';
import Search from './Search.jsx';
import Words from './Words.jsx';
import {useState, useEffect} from 'react';
// import $ from 'jquery';
import axios from 'axios';

export default function App() {
  useEffect(() => {
    // get the data from db when the pages load
    getAllWords((response) => {
      console.log('data is : ',response.data);
      setWords(response.data)
    });

  },[]);

  const [words, setWords] = useState([]);

  // save the word and definition into the db
  const saveWord = (word, definition) => {

    // post request with {word and definition}
    // get request with updated words list
    console.log('save word with word and definition :', word, definition);
    axios.post('/words', {
      word:word,
      definition:definition
    })
    .then((response) => {
      console.log('client side post response : ',response);
      getAllWords((response) => {
        console.log('save data and get data updated data back : ',response.data);
        setWords(response.data);
      })

    })
    .catch((error) => {
      console.log('client side post error : ',error);
    })

  }

  const getAllWords = (callback) => {
    console.log('get all words');
    axios.get('/words')
    .then((response) => {
      console.log('client side get all response : ',response);
      callback(response);

    })
    .catch((error) => {
      console.log('client side get all error : ',error);
    })

  }

  // search word to search a specific word || just filter the word based on the characters typing in
  const searchWord = (keyword) => {
    // get request with query param of keyword
    console.log('search word with keyword : ',keyword)
    axios.get('/words', {params: {keyword:keyword}})
    .then((response) => {
      console.log('client side post response : ',response);
      setWords(response.data);

    })
    .catch((error) => {
      console.log('client side post error : ',error);
    })
  }

  // delete word
  const deleteWord = (word) => {
    // delete request with word as query param
    // get request with updated words list
    console.log('delete word with word : ',word)
    axios.delete('/words', {data : {
      word:word
    }})
    .then((response) => {
      console.log('client side delete response : ',response);
      getAllWords((response) => {
        console.log('delete data and get data updated data back : ',response.data);
        setWords(response.data);
      })
    })
    .catch((error) => {
      console.log('client side delete error : ',error);
    })
  }

  // update word
  const updateWord = (word, newDef) => {
    // put request with {word and definition}
    // get request with updated words list
    console.log('update word with new info : ', word, newDef)
    axios.put('/words', {
      word:word,
      definition:newDef
    })
    .then((response) => {
      console.log('client side update response : ',response);
      getAllWords((response) => {
        console.log('update data and get data updated data back : ',response.data);
        setWords(response.data);
      })
    })
    .catch((error) => {
      console.log('client side update error : ',error);
    })
  }


  return (
    <div className = 'container' >
      <Form saveWord={saveWord} editText={''}/>
      <Search searchWord={searchWord}/>
      <Words words={words} updateWord={updateWord} deleteWord={deleteWord}/>
    </div>
  )
}
