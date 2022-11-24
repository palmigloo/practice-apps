require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


/****
 *
 *
 * Other routes here....
 *
 *
 */

app.get('/words', (req, res) => {

  if (req.query.keyword !== undefined) {
    console.log('get one word request');
    db.findWord(req.query.keyword)
      .then((data) => {
        console.log('find one specific word : ', data);
        res.status(200).send(data);
      })
      .catch((err) => {
        if (err) {
          res.sendStatus(500);
        }
      })
  } else {
    console.log('get all words request');
    db.findAll()
      .then((data) => {
        console.log('find all the records : ', data);
        res.status(200).send(data);
      })
      .catch((err) => {
        if (err) {
          res.sendStatus(500);
        }
      })
  }

});

// app.get('/words', (req, res) => {
//   console.log('get request');
//   db.findAll()
//     .then((data) => {
//       console.log('find all the records : ', data);
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       if (err) {
//         res.sendStatus(500);
//       }
//     })
// });



app.post('/words', (req, res) => {
  console.log('post request with body info : ', req.body.word, req.body.definition);
  db.saveWord(req.body.word, req.body.definition)
    .then(() => {
      console.log('saved the word');
      res.send('insert successful');
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(500);
      }
    })
});

app.put('/words', (req, res) => {
  console.log('put request with body info : ', req.body.word, req.body.definition);
  db.updateWord(req.body.word, req.body.definition)
    .then((data) => {
      console.log('update the word');
      res.send('update successful');
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(500);
      }
    })
});

app.delete('/words', (req, res) => {
  console.log('delete request');
  db.deleteWord(req.body.word)
    .then((data) => {
      console.log('delete the word');
      res.send('delete successful');
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(500);
      }
    })
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
