const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.render('login');
});

router.post('/login', (request, response, next)=> {
  return response.send('logged in');
});

router.post('/user', (request, response, next)=> {
  response.render('index');
})
module.exports = router;