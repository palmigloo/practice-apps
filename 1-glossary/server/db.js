const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
// write a function to generate initial values of words

const wordsSchema = new mongoose.Schema({
  word: String,
  definition: String
});

const Words = mongoose.model('Words', wordsSchema);

// save word to db , return a promise
module.exports.saveWord = (word, definition) => {
  console.log('server side save word with info: ', word, definition);
  return Words.create({
    word:word,
    definition:definition
  });
};

module.exports.findWord = (keyword) => {
  console.log('server side find word with keyword: ', keyword);
  return Words.find({word: keyword});
}

module.exports.findAll = () => {
  console.log('server side find all words ')
  return Words.find({});
}

module.exports.updateWord = (word, definition) => {
  console.log('server side update word with new info: ', word, definition)
  return Words.updateOne({word: word}, {definition: definition});
}

module.exports.deleteWord = (word) => {
  console.log('server side delete word with word: ', word);
  return Words.deleteOne({word: word});
}











