const https = require('https');
const http = require('http');
function printMessage(city, temp) {
    const message = `Nhiệt độ nước ${city} là ${temp} độ C`;
    console.log(message);
}

function printError (error) {
    console.error(error.message);
}

function getCelsius (kelvin){
    const celsius = kelvin - 273.15;
    return Math.round(celsius);
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
                    try {
                        const weather = JSON.parse(body);
                        printMessage(city, getCelsius(weather.main.temp));
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

module.exports.getTemp = getTemp;