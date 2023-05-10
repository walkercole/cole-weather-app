import React from 'react'
import Icons from './icons'
function Form() {    
    const [state, setState] = React.useState({temp: 25, wind: 12, rain: 1.3, weather: 'Sunny', location: 'Brussels'});

    function handleSubmit(e) {
        e.preventDefault()
        const search = document.querySelector('input')
        const weatherMsg = document.querySelector('#weatherMsg')
        const errMsg = document.querySelector('#errMsg')
        const location = search.value
        weatherMsg.innerHTML = 'Loading...'
        errMsg.innerHTML = ''

        fetch(`/weather?address=${location}`).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    weatherMsg.innerHTML = ''
                    return errMsg.innerHTML = data.error
                }
                    weatherMsg.innerHTML = ''
                    errMsg.innerHTML = ''
                    console.log(data)
                    return setState({
                        temp: data.forecast.temp,
                        wind: data.forecast.wind,
                        rain: data.forecast.rain,
                        weather: data.forecast.weather,
                        location: data.location
                    })
            })
        })
        
    }
  
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-12 sm:py-24 lg:px-8 bg-gradient">
          <div className="text-center" />
            <form onSubmit={handleSubmit}>
                <label htmlFor="location" className="block text-sm font-medium leading-2 text-gray-900">What's the weather in...</label>
                <div className="mt-2">
                <input id="location" placeholder="Address, City, Zipcode, etc..." name="location" autoComplete="location" required className="inline-block w-60 px-4 mx-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <button type="submit" className="inline-block w-40 mx-4 my-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                
                </div>
            </form>
            <p id="weatherMsg"></p>
            <p id="errMsg" />
            <div id="weather_wrapper">
            <div className="weatherCard">
                <div className="currentTemp px-6">
                    <span id="temp" className="temp">{state.temp}&deg;</span>
                    <span id="location" className="location">{state.location}</span>
                </div>
                <div className="currentWeather">
                    <Icons e={state.weather[0]} />
                    <div className="info">
                        <span id="rain" className="rain">{state.rain} MM</span>
                        <span id="wind" className="wind">{state.wind} MPH</span>
                    </div>
                </div>
            </div>
        </div>
        </main>
    );
  }
export default Form