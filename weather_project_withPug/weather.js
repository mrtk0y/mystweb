const https = require('https');
const http = require('http');

function printMessage(city, temp,humidity, wind, timezone) {
    const message = `Thông tin thời tiết của thành phố ${city} là 
    Nhiệt độ ${temp} C
    Độ ẩm ${humidity} % 
    Tốc độ gió là ${wind} m/s`;
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
                    console.log(body);
                });
                //Parse data
                response.on('end', () => {
                    const weather = JSON.parse(body);
                    const temp = getCelsius(weather.main.temp);
                    const humidity = weather.main.humidity; 
                    const windSpeed = weather.wind.speed; 
                    const timezone = weather.timezone;
                    const values = {
                        temp, humidity, windSpeed, timezone
                    };
                               
                    try {
                        printMessage(city, getCelsius(temp),humidity,windSpeed,timezone);
                        // console.log(weather);
                    } catch (error) {
                        printError(error);
                    }
                });
            } else {
                const message =`Có vấn đề khi tìm kiếm thông tin thời tiết của thành phố ${city} (${http.STATUS_CODES[response.statusCode]}) `;
                const statusCodeError = new Error (message);
                printError(statusCodeError);
            };
        });
        request.on('error', printError) 
    } catch(error) {
            printError(error);
    }
}

//  const city = process.argv.slice(2);
//  city.forEach(getTemp);

module.exports.getTemp = getTemp;