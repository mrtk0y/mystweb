const https = require('https');
const http = require('http');

function printMessage(city, temp) {
    const message = `The temp of ${city} is ${temp} F`;
    console.log(message);
}

function getCelsius(kelvin) {
    const celsius = kelvin - 273;
    return Math.round(celsius);
}

function printError (error) {
    console.error(error.message);
}

function getTemp (city) {
    try{
        const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=27e8a192a08c2cb50fc6139144dcd6fe`, response => {
            if (response.statusCode === 200){
                let body = "";      
                //Read data
                response.on('data', data1 => {
                    body += data1.toString();
                });
                //Parse data
                response.on('end', () => {
                    const weather = JSON.parse(body);
                    try {
                        printMessage(city, getCelsius(weather.main.temp));
                        // console.log(weather);

                    } catch (error) {
                        printError(error);
                    }
                });
            } else {
                const message =`There was an error getting the Temp for ${city} (${http.STATUS_CODES[response.statusCode]}) `;
                const statusCodeError = new Error (message);
                printError(statusCodeError);
            };
        });
        request.on('error', printError) 
    } catch(error) {
            printError(error);
    }
}

const city = process.argv.slice(2);
getTemp(city);

// module.exports.getTemp = getTemp;