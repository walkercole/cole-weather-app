import React from 'react'
import Icons from './icons'
function Form() {    
    const [state, setState] = React.useState({temp: 25, wind: 12, rain: 1.3, weather: 'Sunny', location: 'Brussels',  humidity: 40, windDir: 'N', visibility: 12, uv: 4, tagline: `It is currently 25 degrees out. It feels like 25 degrees outside. There's 1.3 Millimeters of rain projected with wind speeds of 12 mph.`});

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
                        location: data.location,
                        tagline: data.forecast.forecast,
                        visibility: data.forecast.visibility,
                        uv: data.forecast.uv,
                        humidity: data.forecast.humidity,
                        windDir: data.forecast.windDir
                    })
            })
        })
        
    }
  
    return (
        <main className="grid min-h-full place-items-center  px-6 py-12 sm:py-24 lg:px-8 isolate bg-gradient">
            {/* <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
            </div> */}
            <div className="text-center" />
            <form onSubmit={handleSubmit}>
                <label htmlFor="location" className="block text-sm font-medium leading-2 text-white">What's the weather in...</label>
                <div className="mt-2">
                <input id="location" placeholder="Address, City, Zipcode, etc..." name="location" autoComplete="location" required className="inline-block w-60 px-4 mx-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <button type="submit" className="inline-block w-40 mx-4 my-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                
                </div>
            </form>
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[20rem]" aria-hidden="true">
                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
            </div>
            <p id="weatherMsg"></p>
            <p id="errMsg" />
            <div className="mx-auto mt-16 max-w-2xl rounded ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-200">{state.location}</h3>
                    <p className="mt-6 text-base leading-7 text-white">{state.tagline}</p>
                    <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-white">What’s included</h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                    </div>
                    <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6">
                    <li className="flex gap-x-3 font-semibold">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Wind Direction: <span className="font-semibold text-gray-200">{state.windDir}</span>
                    </li>
                    <li className="flex gap-x-3 font-semibold">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Humidity: <span className="font-semibold text-gray-200">{state.humidity}</span>
                    </li>
                    <li className="flex gap-x-3 font-semibold">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Visiblity: <span className="font-semibold text-gray-200">{state.visibility} kmh</span>
                    </li>
                    <li className="flex gap-x-3 font-semibold">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        UV Index: <span className="font-semibold text-gray-200">{state.uv}</span>
                    </li>
                    </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                        <div className="weatherCard">
                            <div className="currentWeather">
                                <Icons e={state.weather[0]} />
                                <div className="info">
                                    <span id="rain" className="rain">{state.rain} MM</span>
                                    <span id="wind" className="wind">{state.wind} MPH</span>
                                </div>
                                
                            </div>
                        </div>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-white">{state.temp}&deg;</span>
                        <span className="text-sm font-semibold leading-4 tracking-wide text-gray-200">Fahrenheit</span>
                        </p>
                        {/* <a href="#" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get access</a> */}
                        {/* <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p> */}
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-60rem)]" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
            </div> */}
        </main>
    );
  }
export default Form