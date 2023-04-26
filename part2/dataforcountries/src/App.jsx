import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import List from './components/List';

const App = () => {
	// Set state
	const [query, setQuery] = useState('');
	const [countries, setCountries] = useState([]);
	const [weather, setWeather] = useState(null);

	// Get country data from RESTCountries API
	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then((response) => {
			if (query !== '') {
				const searchResult = response.data.filter((country) =>
					country.name.common
						.toLowerCase()
						.includes(query.toLowerCase())
				);
				setCountries(searchResult);
			}
		});
	}, [query]);

	// Get weather info from WeatherStack API
	useEffect(() => {
		const url = 'http://api.weatherstack.com/current';
		// eslint-disable-next-line no-undef
		const api_key = process.env.REACT_APP_API_KEY;

		if (countries.length === 1) {
			const capital = countries.map((country) => country.capital);

			if (capital[0]) {
				axios
					.get(`${url}?access_key=${api_key}&query=${capital[0]}`)
					.then((response) => {
						setWeather(response.data.current);
					});
			}
		}
	}, [countries]);

	// Input search field
	const handleSearch = (event) => {
		setQuery(event.target.value);
	};

	// 'More Info' buttons on country list
	const handleClick = (event) => {
		setQuery(event);
	};

	return (
		<main>
			<h1>Country Data</h1>
			<Search
				htmlFor='search'
				value={query}
				onChange={handleSearch}
			/>
			<List
				handleClick={handleClick}
				countries={countries}
				weather={weather}
			/>
		</main>
	);
};

export default App;
