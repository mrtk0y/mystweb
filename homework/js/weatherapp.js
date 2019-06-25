
// Function to get the HTTPS module
const https = require('https');

function printMessage(city, temp){
    const message = `The temp of ${city} is ${temp} F`;
    console.log(message);
}

function getTemp (city) {
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=27e8a192a08c2cb50fc6139144dcd6fe`
    , response => {
        let body = "";
        let weather = "";
        //Read data
        response.on('data', data1 => {
            body += data1.toString();
        });

        //Parse data
        response.on('end', () => {
            weather = JSON.parse(body);
            printMessage(city, weather.main.temp);
            ;
        });
    });
};
const city = process.argv.slice(2);
city.forEach(getTemp);