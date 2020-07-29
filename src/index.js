require('./models/Users');

const express = require('express');
const bodyParser = require('body-parser');
const moongose = require('mongoose');

const requireAuth = require('./middlewares/requireAuth');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

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

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});