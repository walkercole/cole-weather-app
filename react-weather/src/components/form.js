function Form() {    
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
                    errMsg.innerHTML = ''
                    return weatherMsg.innerHTML = `In ${data.location} it is ${data.forecast}`
            })
        })
    }
  
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center" />
            <p>Use this site to get your weather!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">What's the weather in...</label>
                <div className="mt-2">
                <input id="location" placeholder="Address, City, Zipcode, etc..." name="location" autoComplete="location" required className="block w-80 px-4 mx-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <button type="submit" className="flex w-60 mx-auto my-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </form>
            <p id="weatherMsg" />
            <p id="errMsg" />
        </main>
    );
  }
export default Form