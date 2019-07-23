const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser =  require('cookie-parser');
const path=require('path');
const app = express();

app.use(express.static(path.join(__dirname,"views")));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('index');
});

app.post('/weather', (request, response) => {
  response.render('weather');
})

app.get('/user', (request, response) => {
  response.render('user', { name: request.cookies.username});
})

app.post('/user', (request, response) => {
  response.cookie('username', request.body.username);
  response.render('user',{ name: request.body.username });
})

app.get('/login', (request, response) => {
  response.render('login')
})

app.listen(3000, ()=> {
  console.log('Sever is running now at port 3000');
});