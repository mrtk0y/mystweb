const express = require('express');
const router = express.Router();
const weather = require('../weather.js');
// app.get('/weather',(request, response) => {
//   response.render('weather');
// });

router.post('/', (request, response) => {
  const city = request.body.city;
  weather.getTemp(city)
    .then(function(a) {
      response.render('weather', a);
    })
    .catch(function(error) {
      console.log(error);
    })
});

module.exports = router; 