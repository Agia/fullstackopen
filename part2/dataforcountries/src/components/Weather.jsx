/* eslint-disable react/prop-types */
const Weather = ({ weather }) => {
	
	return (
		<>
			{weather && (
				<div className="weatherData">
					<h2>Weather</h2>
					<ul>
						<li>Temperature: {weather.temperature}&deg; Celsius</li>
					</ul>
					<div>
						<img
							src={weather.weather_icons[0]}
							alt={weather.weather_descriptions[0]}
						/>
					</div>
					<ul>
						<li>Wind: {weather.wind_speed} MPH, towards {weather.wind_dir}</li>
					</ul>
				</div>
			)}
		</>
	)
}

export default Weather