const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mid = require('../middleware');


// GET Login
router.get('/login', (request, response, next) => {
  return response.render('login', { title: 'Log In'});
});
// POST login
router.post('/login', (request,response, next) => {
  response.send('success');
});

// GET /
router.get('/', (request, response, next) => {
  return response.render('index',{ title: 'Home'});
});

// GET Register
router.get('/register',(request, response, next) => {
  return response.render('register');
});
// POST REGISTER
router.post('/register', (request, response, next) => {
  if (request.body.email &&
    request.body.name &&
    request.body.password &&
    request.body.confirmPassword) {

      // confirm that user typed same password twice
      if (request.body.password !== request.body.confirmPassword) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        return next(err);
      }

      // create object with form input
      var userData = {
        email: request.body.email,
        name: request.body.name,
        favoriteBook: request.body.favoriteBook,
        password: request.body.password
      };

      // use schema's `create` method to insert document into Mongo
      User.create(userData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          request.session.userId = user._id;
          return response.redirect('/profile');
        }
      });

    } else {
      var err = new Error('All fields rquired.');
      err.status = 400;
      return next(err);
    }
});

// GET /about
router.get('/about', (request, response, next) => {
  return response.render('about',{ title: 'About'});
});

// GET /contact
router.get('/contact', (request, response, next) => {
  return response.render('contact',{ title: 'Contact'});
});

module.exports = router;