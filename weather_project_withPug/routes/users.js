const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.get('/', (request, response) => {
  response.render('user', { name: request.cookies.username });
  
});

router.post('/', (request, response) => {
  response.cookie('username', request.body.username);
  console.log(request.body.username);

  response.render('user', { name: request.body.username });
});

module.exports = router;