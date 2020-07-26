const express = require('express');
const moongose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://laura-admin:TMcpl2vO0JNzfTuN@cluster0.95txu.mongodb.net/<dbname>?retryWrites=true&w=majority';

moongose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

moongose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

moongose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
  res.send('Hi There!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});