/* eslint-disable react/prop-types */
import CountryItem from './CountryItem';
import Info from './Info';
import Weather from './Weather';

const List = ({ countries, weather, handleClick }) => {

	if (countries.length > 10) {
		return (
			<div>
				<p>Too many matches. Narrow the search query.</p>
			</div>
		);
	} else if (countries.length > 1 && countries.length < 10) {
		return (
			<div>
				{countries.map((country) => (
					<CountryItem
						key={country.name.common}
						country={country}
						handleClick={handleClick}
					/>
				))}
			</div>
		);
	} else if (countries.length === 1) {
		return (
			<div>
				{countries.map((country) => (
					<Info
						key={country.name.common}
						country={country}
					/>
				))}

				<Weather weather={weather} />
			</div>
		);
	} else {
		return <></>;
	}
}

export default List