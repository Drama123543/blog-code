const path = require('path');
const express = require('express');
const pug = require('pug');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('*', function (req, res) {
  res.render('mockCsrf', {title: 'mock csrf'});
})

app.listen(4002, () => {
  console.log('mock csrf http://localhost:4002/')
})