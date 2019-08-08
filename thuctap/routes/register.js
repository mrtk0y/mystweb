const express = require('express');
const router = express.Router();

router.get('/register',(request, response, next) => {
  return response.render('register');
});

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

module.exports = router;