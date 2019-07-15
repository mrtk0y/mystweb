const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/example', (request, response) => {
  
});

app.listen(3000, ()=> {
  console.log('Sever is running now at port 3000');
})