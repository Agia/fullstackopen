/* eslint-disable react/prop-types */
const CountryItem = ({ country, handleClick }) => (
    
	<div className="listItem">
		<span>{country.name.common}</span>
		<button
            onClick={() => handleClick(country.name.common)}>
			More Info
		</button>
	</div>
);

export default CountryItem;
