const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/register', (request, response) => {
  response.render('register');
});

router.post('/register', (request, response, next)=> {
  return response.send('logged in');
});

router.post('/user', (request, response, next)=> {
  // response.render('index');
  if(
    request.body.email &&
    request.body.password) 
    {
      //confirm that user typed same password twice

    } else {
      let err = new Error ('All fields required');
      err.status = 400;
      return next(err);
    }
  
})
module.exports = router;