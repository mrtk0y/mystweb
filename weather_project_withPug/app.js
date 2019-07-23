const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');
const app = express();

app.use(express.static(path.join(__dirname,"views")));
app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('index');
});

// app.get('/weather', (request, response) => {
//   response.render('weather')
// })

app.post('/user', (request, response) => {
  response.render('user');
})

app.listen(3000, ()=> {
  console.log('Sever is running now at port 3000');
});