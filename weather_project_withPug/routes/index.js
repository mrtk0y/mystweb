const express = require('express');
const router = express.Router();


router.get('/', (request, response) => {
  response.render('index');
}); 

// window.onload = () => {
//   const aeris = new AerisWeather('fOjQxkH53q0NU5795jqMJ', 'iYhlXwTxc0CaoxeEQkHFlf5cnYRacIBn7UvoW9j0');
//   aeris.views().then(views => {
//       const map = new views.InteractiveMap(document.getElementById('map'), {
//           center: {
//               lat: 16.2569,
//               lon: 104.0186
//           },
//           zoom: 5,
//           layers: 'flat,satellite-geocolor,radar,temperatures,admin,counties'
//       });
//   });
// };

module.exports = router;