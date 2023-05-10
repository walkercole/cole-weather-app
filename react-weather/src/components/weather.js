function Weather () {
    return (
        <div id="weather_wrapper">
            <div className="weatherCard">
                <div className="currentTemp">
                    <span id="temp" className="temp">23&deg;</span>
                    <span id="location" className="location">Brussels</span>
                </div>
                <div className="currentWeather">
                    <span className="conditions">&#xf00d;</span>
                    <div className="info">
                        <span id="rain" className="rain">1.3 MM</span>
                        <span id="wind" className="wind">10 MPH</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Weather