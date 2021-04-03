const path = require('path');
const express = require('express');
const pug = require('pug');
const csrfProtection = require('@authentication/csrf-protection')

const app = express();
let list = [
  {title: '文章一'},
  {title: '文章二'},
];

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(csrfProtection());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res, next) {
  res.render('list', {
    title: '文章列表',
    list
  })
});

app.get('/post', function(req, res, next) {
  res.render('post', {
    title: '新增文章'
  });
});

app.post('/post', function(req, res, next) {
  const title = req.body.title
  if(title) {
    list.push({title})
  }
  return res.redirect('/');
});

app.get('*', function (req, res) {
  res.send('hello world!')
})
app.listen(4001, () => {
  console.log('http://localhost:4001/')
})