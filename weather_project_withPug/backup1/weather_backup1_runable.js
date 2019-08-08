const https = require("https");
const http = require("http");

function printMessage(city, temp, humidity, wind, timezone) {
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

function printError(error) {
  console.error(error.message);
}

// function setFetchedDatas(city) {
//   let informations = getTemp(city);
//   setTimeout(function () {
//     console.log(informations);
//   }, 2000);
//   return informations;
// }

// setFetchedDatas('Ha Noi');

function getTemp(city) {
  return new Promise((resolve, reject) => {
    https
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=27e8a192a08c2cb50fc6139144dcd6fe`,
        response => {
          if (response.statusCode === 200) {
            let body = "";

            response.on("data", data1 => {
              body += data1.toString();
              console.log(body);
            });

            response.on("end", () => {
              const weather = JSON.parse(body);
              const values = {
                temp: getCelsius(weather.main.temp),
                humidity: weather.main.humidity,
                windSpeed: weather.wind.speed,
                timezone: weather.timezone
              };

              try {
                printMessage(
                  city,
                  values.temp,
                  values.humidity,
                  values.windSpeed,
                  values.timezone
                );
                informations = {
                  city: city,
                  temp: values.temp,
                  humidity: values.humidity,
                  windSpeed: values.windSpeed,
                  timezone: values.timezone
                };
              } catch (error) {
                printError(error);
                reject(error);
              }
              resolve(informations);
            });
          } else {
            const message = `Có vấn đề khi tìm kiếm thông tin thời tiết của thành phố ${city} (${
              http.STATUS_CODES[response.statusCode]
            })`;
            const statusCodeError = new Error(message);
            printError(statusCodeError);
            reject(statusCodeError);
          }
        }
      )
      .on("error", function(error) {
        printError(error);
        reject(error);
      });
  });
}

//  const city = process.argv.slice(2);
//  city.forEach(getTemp);

module.exports.getTemp = getTemp;
