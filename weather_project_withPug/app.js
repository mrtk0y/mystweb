const express = require('express');
const path=require('path');
const app = express();

app.use(express.static(path.join(__dirname,"views")));

app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/example', (request, response) => {
  
});

app.listen(3000, ()=> {
  console.log('Sever is running now at port 3000');
})