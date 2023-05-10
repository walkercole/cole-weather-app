const request = require('request')

const FORECAST_TOKEN = process.env.FORECAST_TOKEN

const forecast = (lat, long, callback) => {
    const url =
    'http://api.weatherstack.com/current?access_key=' + FORECAST_TOKEN + '&query=' + lat + ',' + long + '&units=f';
    // Obj property shorthand on url
    request({ url, json: true}, (error, { body } = {}) => {
    if (error) {
        callback('Unable to connect to weather service...', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    }
    else {
        const data = body.current;
        callback(undefined, {weather: data.weather_descriptions, temp: data.temperature, rain: data.precip, wind:data.wind_speed})
        // callback(undefined, `<p>${data.weather_descriptions[0]} <img src="${data.weather_icons[0]}" style="width:32px;" /> It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees outside. ${data.precip} ${data.wind_speed}</p>`, data.precip);
    }
    });
}

module.exports = forecast