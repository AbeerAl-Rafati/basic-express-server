'use strict';

const express = require('express');
const errorHandler = require('./error-handlers/404');
const notFoundHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator')
const app = express();


app.use(express.json());
app.use(logger);



app.get('/', (req, res) => {
  res.send('hello again in class 2');
});

// app.get('/person', (req, res) => {
//   res.send('this is my server, enter any name as query to see result =D');
// })


app.get('/person', validator, (req, res) => {

  const name = req.query.name;
  // if (name) {
  res.json(`The name entered is ${name}`)
  // } else if ({ name: '' }) {
  //   res.sendStatus(500)
  //   return
  // }

});



app.get('/bad', (req, res) => {
  throw new Error('Errooooooooooorrrrrrrrrrrrrrrr');
})









app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: (port) => { app.listen(port, () => console.log(`server working on ${port}`)) }
}