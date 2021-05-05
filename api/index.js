const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/blackbook';
const PORT = process.env.PORT || '8080';


if(process.env.NODE_ENV !== 'production') {

  const dotenv = require('dotenv').config({
    path: 'api/.env'
  });

  if (dotenv.error) {
    throw dotenv.error;
  }
}


const express = require('express');
// const { get } = require('mongoose');

const addressesRouter = require('./routes/addresses.js');
const usersRouter = require('./routes/users.js');
const contactsRouter = require('./routes/contacts.js');

const app = express();
const path = require('path');


// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'index.html'))
// });

app.use('/', express.static(path.join(__dirname, '../build')))

app.use('/addresses', addressesRouter);
app.use('/users', usersRouter);
app.use('/contacts', contactsRouter);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})
// function logEverything (req) {
//   console.log(
//     'path:', req.path,
//     'method:', req.method,
//     'params:', req.params,
//     'body:', req.body,
//   );
// }

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
  console.log(`My best friend is ${process.env.BEST_FRIEND}`)
});

const mongoose = require("mongoose");


mongoose
  .connect(DB_URI)
  .then(() => {
    console.log(`Successfully connected to: ${DB_URI}`);
  })
  .catch((err) => console.log(err.message));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./build'));
  // only add this part if you are using React Router
  app.get('*', (req,res) =>{
      console.log(path.join(__dirname+'/build/index.html'));
      res.sendFile(path.join(__dirname+'/build/index.html'));
  });
}

exports.uri = DB_URI;